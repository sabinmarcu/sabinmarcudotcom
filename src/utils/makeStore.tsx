import {
  ComponentType,
  createContext,
  FC,
  useContext,
  useMemo,
} from 'react';
import { capitalize, PrefixType, prefix } from './text';

type HandlerParams<INPUT, OPTIONS> = {
  defaultValue?: INPUT | undefined,
} & OPTIONS;
type HandlerType<T, INPUT, OPTIONS> = (params: HandlerParams<INPUT, OPTIONS>) => T;

type ProviderFactory<T, INPUT, OPTIONS> = (
  params: HandlerParams<INPUT, OPTIONS>,
  options?: {
    name?: string,
    handler?: HandlerType<T, INPUT, OPTIONS>
  }
) => FC<OPTIONS>;

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
  const StoreContext = createContext<T | undefined>(undefined);
  const useStoreProvider = handler;
  const makeProvider: ProviderFactory<T, INPUT, OPTIONS> = (
    params,
    options,
  ) => {
    const {
      name: title = 'default',
      handler: overrideHandler,
    } = options || {};
    const useProvider = overrideHandler || useStoreProvider;
    const Provider: FC<OPTIONS> = ({ children, ...renderOptions }) => {
      const renderParams = useMemo(
        () => ({
          ...params,
          ...renderOptions,
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

  const useStore = () => useContext<T | undefined>(StoreContext);
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

  const withStore = <P extends { [key in StoreName]: string }>(
    ComposedComponent: ComponentType<P>,
  ): FC<Omit<P, StoreName>> => (props) => {
      const store = useStore();
      return <ComposedComponent {...{ ...props, [name]: store } as P} />;
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
        > = (props) => {
          const store = useStore();
          const data = useMemo(
            () => (store ? hook(store) : undefined),
            [store],
          );
          return <ComposedComponent {...{ ...props, [key]: data } as any} />;
        };
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

  return {
    Context: StoreContext,
    Provider: DefaultProvider,
    makeProvider,
    useStore,
    hooks,
    withStore,
    hocs,
    name,
  };
};
