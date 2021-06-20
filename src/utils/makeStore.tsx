import {
  ComponentType,
  createContext,
  FC,
  useContext,
  useMemo,
} from 'react';
import { capitalize } from './text';

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

type HookFuncType<T> = (input: T) => any;

export const makeStore = <
  T extends {} = any,
  INPUT extends any = T,
  OPTIONS extends {} = {},
>() => <HookKeys extends string, StoreName extends string>(
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
      selectors: Record<HookKeys, HookFuncType<T>>,
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
  const hooks = Object.entries<HookFuncType<T>>(selectors || {} as typeof selectors)
    .reduce<{
    [key in keyof typeof selectors as `use${Capitalize<key>}`]: HookFuncType<T>
  }>(
    (prev, [key, hook]) => ({
      ...prev,
      [`use${key[0].toUpperCase()}${key.substr(1)}`]: () => {
        const store = useStore();
        if (store) {
          return hook(store);
        }
        return undefined;
      },
    }),
    {} as any,
  );
  const hocs = Object.entries<HookFuncType<T>>(selectors || {} as typeof selectors)
    .reduce<{
    [K in keyof typeof selectors as `with${Capitalize<K>}`]: <P extends { [key in K]: any }>(
    ComposedComponent: ComponentType<P>,
    ) => FC<Omit<P, StoreName>>
  }>(
      (prev, [key, hook]) => {
        const propName = [key] as const;
        return ({
          ...prev,
          [`with${key[0].toUpperCase()}${key.substr(1)}`]: <P extends { [key in typeof propName[number] ]: any }>(
            ComposedComponent: ComponentType<P>,
          ): FC<Omit<P, StoreName>> => (props) => {
            const store = useStore();
            const data = useMemo(
              () => (store ? hook(store) : undefined),
              [store],
            );
            return <ComposedComponent {...{ ...props, [key]: data } as P} />;
          },
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
