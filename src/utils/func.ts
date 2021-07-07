import Color from 'color';

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

export const lerp = (
  from: number,
  to: number,
  percent: number,
): number => from * (1 - percent) + to * percent;

export const lerpColor = (
  from: Color,
  to: Color,
  percent: number,
): Color => {
  const ah = parseInt(`${from.hex()}`.replace(/#/g, ''), 16);
  const ar = ah >> 16;
  const ag = (ah >> 8) & 0xff;
  const ab = ah & 0xff;
  const bh = parseInt(`${to.hex()}`.replace(/#/g, ''), 16);
  const br = bh >> 16;
  const bg = (bh >> 8) & 0xff;
  const bb = bh & 0xff;
  const rr = ar + percent * (br - ar);
  const rg = ag + percent * (bg - ag);
  const rb = ab + percent * (bb - ab);

  return new Color(
    `#${(((1 << 24) + (rr << 16) + (rg << 8) + rb) | 0).toString(16).slice(1)}`,
  );
};
