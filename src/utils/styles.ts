type Style = Record<string, any>;
type Param = Record<string, any>;
type StyleCompiler<T extends Param> = (params: T) => Style;
type StyleParam<T extends Param> = Style | StyleCompiler<T>;
type StylerGuard<T extends Param> = (
  params: T
) => boolean;
type Styler<T extends Param> = (
  params: T
) => Style;

const makeStyleCompiler = <T extends Param>(
  resultOrCompiler: StyleParam<T>,
): StyleCompiler<T> => (params: T) => {
    if (typeof resultOrCompiler === 'function') {
      return resultOrCompiler(params);
    }
    return resultOrCompiler;
  };

export const makeStyler = <T extends Param>(
  result: StyleParam<Required<T>>,
  guard?: StylerGuard<T>,
): Styler<T> => (params: T) => {
    const compiler = makeStyleCompiler<Required<T>>(result);
    if (!guard || !guard(params)) {
      return {};
    }
    return compiler(params as Required<T>);
  };

export const combineStylers = <T extends Param>(
  ...stylers: Styler<T>[]
): (params: T) => Style => (
    params,
  ) => stylers.reduce(
    (
      prev: Partial<Style>,
      styler,
    ) => ({
      ...prev,
      ...styler(params),
    }),
    {},
  );

export const makeStylerSet = <T extends Param>() => ({
  makeStyler: (
    result: StyleParam<Required<T>>,
    guard?: StylerGuard<T>,
  ): Styler<T> => makeStyler<T>(result, guard),
  combineStylers: (
    ...stylers: Styler<T>[]
  ): (params: T
    ) => Style => combineStylers(...stylers),
});
