import {
  useCallback, useRef, useState,
} from 'react';

export const useMenu = <T extends HTMLElement>() => {
  const [menuOpen, setMenuOpen] = useState(false);
  const onClick = useCallback(
    () => setMenuOpen(true),
    [setMenuOpen],
  );
  const onClose = useCallback(
    () => setMenuOpen(false),
    [setMenuOpen],
  );
  const anchor = useRef<T>(null);
  return ({
    button: { onClick, ref: anchor },
    menu: { anchorEl: anchor.current, open: menuOpen, onClose },
    onClick,
    onClose,
    menuOpen,
    anchor,
  });
};
