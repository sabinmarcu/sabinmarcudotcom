export const deepEqual = (x: any, y: any) => {
  if (x === y) {
    return true;
  }
  if ((typeof x === 'object' && x != null) && (typeof y === 'object' && y != null)) {
    if (Object.keys(x).length !== Object.keys(y).length) return false;

    try {
      Object.keys(x).forEach((prop) => {
        if (!Object.prototype.hasOwnProperty.call(y, prop)) {
          throw new Error();
        }
        if (!deepEqual(x[prop], y[prop])) {
          throw new Error();
        }
      });
    } catch (e) {
      return false;
    }

    return true;
  }
  return false;
};
