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
) => FC;

type HookFuncType<T, R extends any = any> = (input: T) => R;
type HOCType<
  T,
  K extends keyof any,
  V extends HookFuncType<T>,
> = <P extends { [key in K]: ReturnType<V> }>(
  ComposedComponent: ComponentType<P>,
) => FC<Omit<P, K>>;

export type HOCProp<
  T extends HOCType<any, string, any>,
> = T extends HOCType<any, infer K, infer V>
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
  const useStore = () => useContext<T | undefined>(StoreContext);
  const useStoreProvider = (params: HandlerParams<INPUT, OPTIONS>) => handler(params);
  const makeProvider: ProviderFactory<T, INPUT, OPTIONS> = (
    params,
    options,
  ) => {
    const {
      name: title = 'default',
      handler: overrideHandler,
    } = options || {};
    const useProvider = overrideHandler || useStoreProvider;
    const Provider: FC = ({ children }) => {
      const value = useProvider(params);
      return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
    };
    Provider.displayName = [title, name, 'Provider'].filter(Boolean).map(capitalize).join('');
    return Provider;
  };
  const DefaultProvider = makeProvider({ defaultValue, ...defaultOptions });
  const hooks = Object.entries<HookFuncType<T>>(selectors)
    .reduce<{
    [K in keyof typeof selectors as PrefixType<'use', K & string>]:() => ReturnType<typeof selectors[K]>
  }>(
      (prev, [key, hook]) => ({
        ...prev,
        [prefix('use', key)]: () => {
          const store = useStore();
          if (store) {
            return hook(store);
          }
          return undefined;
        },
      }),
      {} as any);
  const hocs = Object.entries<HookFuncType<T>>(selectors || {} as typeof selectors)
    .reduce<{
    [K in keyof typeof selectors as PrefixType<'with', K & string>]: HOCType<T, K & string, typeof selectors[K]>
  }>(
    (prev, [key, hook]) => {
      const Hoc: HOCType<T, typeof key, typeof selectors[typeof key]> = (
        ComposedComponent,
      ) => (props) => {
        const store = useStore();
        const data = useMemo(
          () => (store ? hook(store) : undefined),
          [store],
        );
        return <ComposedComponent {...{ ...props, [key]: data } as any} />;
      };

      return ({
        ...prev,
        [prefix('with', key)]: Hoc,
      });
    },
    {} as any,
  );
  const withStore = <P extends { [key in StoreName]: string }>(
    ComposedComponent: ComponentType<P>,
  ): FC<Omit<P, StoreName>> => (props) => {
      const store = useStore();
      return <ComposedComponent {...{ ...props, [name]: store } as P} />;
    };
  return {
    Context: StoreContext,
    Provider: DefaultProvider,
    makeProvider,
    useStore,
    hooks,
    hocs,
    withStore,
    name,
  };
};
