/* eslint-disable no-underscore-dangle */
import {
  ComponentType,
  createContext,
  FC,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { deepEqual } from './func';
import { capitalize, PrefixType, prefix } from './text';

type HandlerParams<INPUT, OPTIONS> = {
  defaultValue?: INPUT | undefined,
} & OPTIONS;
type HandlerType<T, INPUT, OPTIONS> = (params: HandlerParams<INPUT, OPTIONS>) => T;
type HandlerUpdateType<INPUT, OPTIONS> = {
  __updateStoreHandler: (params: ProviderParamType<INPUT, OPTIONS>) => undefined | (() => void)
};

type ProviderParamType<INPUT, OPTIONS> = OPTIONS & { value?: INPUT };
type ProviderType<OPTIONS, INPUT> = FC<ProviderParamType<INPUT, OPTIONS>>;
type ProviderFactory<T, INPUT, OPTIONS> = (
  params: HandlerParams<INPUT, OPTIONS>,
  options?: {
    name?: string,
    handler?: HandlerType<T, INPUT, OPTIONS>
  }
) => ProviderType<OPTIONS, INPUT>;

type HookFuncType<T, R extends any = any> = (input: T) => R;
type HOCPropType<T, K extends keyof any, V extends HookFuncType<T>> = { [key in K]: ReturnType<V> };
type HOCType<P, K extends keyof any> = FC<Omit<P, K>>;
type HOCWrapperType<
  T,
  K extends keyof any,
  V extends HookFuncType<T>,
> = <P extends HOCPropType<T, K, V>>(
  ComposedComponent: ComponentType<P>,
) => HOCType<P, K>;

export type HOCProp<
  T extends HOCWrapperType<any, string, any>,
> = T extends HOCWrapperType<any, infer K, infer V>
  ? { [key in K]: ReturnType<V> }
  : never;

export const makeStore = <
  T extends {} = any,
  INPUT extends any = T,
  OPTIONS extends {} = {},
>() => <Selectors extends Record<string, HookFuncType<T>>, StoreName extends string>(
    {
      defaultValue,
      defaultOptions = {} as OPTIONS,
      handler,
      name,
      selectors,
    }: {
      name: StoreName,
      defaultValue?: INPUT,
      defaultOptions?: OPTIONS,
      handler: HandlerType<T, INPUT, OPTIONS>,
      selectors: Selectors,
    },
  ) => {
  type ContextType = T & HandlerUpdateType<INPUT, OPTIONS>;
  const StoreContext = createContext<ContextType | undefined>(undefined);
  const wrapStoreProvider = (
    h: HandlerType<T, INPUT, OPTIONS>,
  ) => (props: HandlerParams<INPUT, OPTIONS>) => {
    const [handlerProps, setHandlerProps] = useState<HandlerParams<INPUT, OPTIONS>>(props);
    const cyaSetHandlerProps = useCallback(
      ({ value, ...providerProps }: ProviderParamType<INPUT, OPTIONS>) => {
        const currentHandlerProps = { ...handlerProps };
        const updateProps = {
          ...providerProps,
          defaultValue: value,
        } as HandlerParams<INPUT, OPTIONS>;
        setHandlerProps(updateProps);
        return () => setHandlerProps(currentHandlerProps);
      },
      [handlerProps, setHandlerProps],
    );
    const handlerData = h({
      ...props,
      ...handlerProps,
    });
    const data: T & HandlerUpdateType<INPUT, OPTIONS> = useMemo(
      () => ({
        ...handlerData,
        __updateStoreHandler: cyaSetHandlerProps,
      }),
      [props, handlerProps, cyaSetHandlerProps],
    );
    return data;
  };
  const useStoreProvider = wrapStoreProvider(handler);
  const makeProvider: ProviderFactory<T, INPUT, OPTIONS> = (
    params,
    options,
  ) => {
    const {
      name: title = 'default',
      handler: overrideHandler,
    } = options || {};
    const useProvider = overrideHandler ? wrapStoreProvider(overrideHandler) : useStoreProvider;
    const Provider: ProviderType<OPTIONS, INPUT> = ({
      children,
      value: renderValue,
      ...renderOptions
    }) => {
      const renderParams = useMemo(
        () => ({
          ...params,
          ...renderOptions,
          defaultValue: renderValue || params.defaultValue,
        }),
        [renderOptions],
      );
      const value = useProvider(renderParams);
      return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
    };
    Provider.displayName = [title, name, 'Provider'].filter(Boolean).map(capitalize).join('');
    return Provider;
  };
  const DefaultProvider = makeProvider({ defaultValue, ...defaultOptions });

  const useStore = () => useContext<ContextType | undefined>(StoreContext);
  const hooks = Object.entries<HookFuncType<T>>(selectors)
    .reduce<{
    [K in keyof typeof selectors as PrefixType<'use', K & string>]:() => ReturnType<typeof selectors[K]>
  }>(
      (prev, [key, hook]) => ({
        ...prev,
        [prefix('use', key)]: () => {
          const store = useStore();
          const value = useMemo(
            () => (store ? hook(store) : undefined),
            [store],
          );
          return value;
        },
      }),
      {} as any);

  const withStore: HOCWrapperType<T, StoreName, (input: T) => T> = (
    ComposedComponent,
  ) => {
    const StoreHOC: HOCType<
    any,
    StoreName
    > = forwardRef((props, ref) => {
      const store = useStore();
      return <ComposedComponent {...{ ...props, [name]: store, ref } as any} />;
    }) as any;
    if (ComposedComponent.displayName) {
      StoreHOC.displayName = `withStore (${ComposedComponent.displayName})`;
    }
    return StoreHOC;
  };
  const hocs = Object.entries<HookFuncType<T>>(selectors || {} as typeof selectors)
    .reduce<{
    [K in keyof typeof selectors as PrefixType<'with', K & string>]: HOCWrapperType<T, K & string, typeof selectors[K]>
  }>(
    (prev, [key, hook]) => {
      const hocName = prefix('with', key);

      const HocWrapper: HOCWrapperType<T, typeof key, typeof selectors[typeof key]> = (
        ComposedComponent,
      ) => {
        const StoreHOC: HOCType<
        HOCPropType<T, typeof key, typeof selectors[typeof key]>,
        typeof key
        > = forwardRef((props, ref) => {
          const store = useStore();
          const data = useMemo(
            () => (store ? hook(store) : undefined),
            [store],
          );
          return <ComposedComponent {...{ ...props, [key]: data, ref } as any} />;
        });
        if (ComposedComponent.displayName) {
          StoreHOC.displayName = `${hocName} (${ComposedComponent.displayName})`;
        }
        return StoreHOC;
      };

      return ({
        ...prev,
        [hocName]: HocWrapper,
      });
    },
    {} as any,
  );

  const useUpdateStore = () => useStore()?.__updateStoreHandler;
  const UpdateStore: FC<ProviderParamType<INPUT, OPTIONS>> = ({ children, ...props }) => {
    const update = useUpdateStore();
    const [uniqProps, setUniqProps] = useState<ProviderParamType<INPUT, OPTIONS>>(
      props as ProviderParamType<INPUT, OPTIONS>,
    );
    useEffect(
      () => {
        if (!deepEqual(uniqProps, props)) {
          setUniqProps(props as ProviderParamType<INPUT, OPTIONS>);
        }
      },
      [props, uniqProps, setUniqProps],
    );
    useEffect(
      () => update?.(uniqProps),
      [uniqProps],
    );
    return <> </>;
  };

  return {
    Context: StoreContext,
    Provider: DefaultProvider,
    Update: UpdateStore,
    useUpdateStore,
    makeProvider,
    useStore,
    hooks,
    withStore,
    hocs,
    name,
  };
};
