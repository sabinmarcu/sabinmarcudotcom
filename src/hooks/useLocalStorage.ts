import {
  useState, useEffect, Dispatch, SetStateAction, useMemo, useCallback,
} from 'react';

import {
  logGroup, logState, makeKey, isKey,
} from './config';
import { usePrevious } from './usePrevious';

export const useLocalStorage = <T>(
  localStorageKey: string,
  defaultValue?: T,
): [T | undefined, Dispatch<SetStateAction<T | undefined>>] => {
  const key = useMemo(
    () => makeKey(localStorageKey),
    [localStorageKey],
  );
  const previousKey = usePrevious(key);
  const [value, setValue] = useState<T>();
  const previousValue = usePrevious(value);
  const initValue = useCallback(
    () => {
      const val = localStorage.getItem(key);
      if (val) {
        try {
          logState('⚙ LocalStorage Get', key, val);
          setValue(JSON.parse(val));
        } catch {
          logState('❌ Could not parse LS data', key, val);
          setValue(defaultValue);
        }
      } else {
        setValue(defaultValue);
      }
    },
    [key, value],
  );
  useEffect(
    () => {
      if (previousKey !== key) {
        initValue();
      }
    },
    [previousKey, key],
  );
  useEffect(
    () => {
      if (value !== previousValue) {
        logState('⚙ LocalStorage Set', key, value);
        localStorage.setItem(key, JSON.stringify(value));
      }
    },
    [previousValue, value],
  );
  useEffect(() => {
    const handler = ({
      storageArea,
      key: k,
      oldValue,
      newValue,
    }: StorageEvent) => {
      if (!k) {
        return;
      }
      const isValidKey = isKey(k);
      const isLocalStorage = storageArea === localStorage;
      const isRightKey = k === key;
      if (!(isLocalStorage && isValidKey && isRightKey)) {
        return;
      }
      try {
        const [ov, nv] = [JSON.parse(oldValue!), JSON.parse(newValue!)];
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
    };
    window.addEventListener('storage', handler);
    return () => window.removeEventListener('storage', handler);
  }, [setValue, key]);
  return [value, setValue];
};
