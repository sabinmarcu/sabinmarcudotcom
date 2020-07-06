/* eslint-disable no-underscore-dangle */

import { useState, useEffect } from 'react';

let _shouldLog = process.env.NODE_ENV === 'development';
export const enableLog = () => { _shouldLog = true; };
export const disableLog = () => { _shouldLog = false; };
export const shouldLog = () => _shouldLog;

let _prefix = 'app';
export const setPrefix = (value) => { _prefix = `${value}`; };
export const prefix = () => _prefix;

// eslint-disable-next-line no-console
export const groupCollapsed = (...args) => _shouldLog && console.groupCollapsed(...args);
// eslint-disable-next-line no-console
export const groupEnd = (...args) => _shouldLog && console.groupEnd(...args);
// eslint-disable-next-line no-console
export const log = (...args) => _shouldLog && console.log(...args);

export const logGroup = (
  message,
  key,
  ...rest
) => {
  groupCollapsed(`${message} %c${key}`, 'color: grey; font-size: 0.9em');
  rest.forEach((it) => {
    if (Array.isArray(it)) {
      log(...it);
    } else {
      log(it);
    }
  });
  groupEnd();
};

const makeMatcher = (pf) => new RegExp(['^', _prefix, ':', pf].join(''));
export const makeKey = (key, pf) => [_prefix, [pf, key].join('')].join(':');
export const isKey = (key, pf) => key.match(makeMatcher(pf));
export const stripKey = (key, pf) => key.replace(makeMatcher(pf), '');

export const logState = (message, key, value) => {
  logGroup(
    message,
    key,
    [`Key: %c${key}`, 'color: blue; text-decoration: underline'],
    [
      `LocalStorage Key: %c${[_prefix, key].join(':')}`,
      'color: blue; text-decoration: underline',
    ],
    ['Value:', value],
  );
};

export const useLocalStorage = (
  key,
  defaultValue,
) => {
  const [initialLoad, setInitialLoad] = useState(false);
  const [value, setValue] = useState(undefined);
  useEffect(() => {
    if (!initialLoad) {
      setInitialLoad(true);
      const val = localStorage.getItem(makeKey(key));
      if (val) {
        try {
          logState('⚙ LocalStorage Get', key, val);
          setValue(JSON.parse(val));
        } catch (e) {
          logState('❌ Could not parse LS data', key, val);
          setValue(defaultValue);
        }
      } else {
        setValue(defaultValue);
      }
    }
  }, [initialLoad, key, defaultValue]);
  useEffect(() => {
    if (!initialLoad) {
      return undefined;
    }
    let shouldUpdate = true;
    try {
      const existingValue = localStorage.getItem(makeKey(key));
      if (existingValue && JSON.parse(existingValue) === value) {
        shouldUpdate = false;
      }
    } finally {
      if (shouldUpdate) {
        if (value === null) {
          logState('⚙ LocalStorage Remove', key, value);
          localStorage.removeItem(makeKey(key));
        } else {
          logState('⚙ LocalStorage Set', key, value);
          localStorage.setItem(makeKey(key), JSON.stringify(value));
        }
      }
    }
    return undefined;
  }, [key, value]);
  useEffect(() => {
    const handler = ({
      storageArea,
      key: k,
      oldValue,
      newValue,
    }) => {
      const isValidKey = isKey(k);
      const isLocalStorage = storageArea === localStorage;
      const isRightKey = k === makeKey(key);
      if (!(isLocalStorage && isValidKey && isRightKey)) {
        return undefined;
      }
      try {
        const [ov, nv] = [
          JSON.parse(oldValue),
          JSON.parse(newValue),
        ];
        logGroup(
          '⚙ LocalStorage Event',
          key,
          [`Old Value: %c${ov}`, 'color: red; text-decoration: underline'],
          [`New Value: %c${nv}`, 'color: green; text-decoration: underline'],
        );
        setValue(nv);
      } catch (e) {
        logState('❌ Could not parse LS data from Event', key, newValue);
      }
      return undefined;
    };
    window.addEventListener('storage', handler);
    return () => window.removeEventListener('storage', handler);
  }, [setValue, key]);
  return [value, setValue];
};

export default useLocalStorage;
