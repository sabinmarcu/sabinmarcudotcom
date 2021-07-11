import {
  IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Tooltip,
} from '@material-ui/core';
import styled from '@emotion/styled';
import {
  ComponentProps, FC, useCallback, useMemo,
} from 'react';

import ThemeLightDarkIcon from 'mdi-react/ThemeLightDarkIcon';
import Brightness4Icon from 'mdi-react/Brightness4Icon';
import Brightness6Icon from 'mdi-react/Brightness6Icon';
import { MdiReactIconComponentType } from 'mdi-react';
import { ThemeColorsProp, useThemeVariant, withThemeColors } from '../stores/theme';
import { ThemeVariant } from '../style/colors';
import { useMenu } from '../hooks/useMenu';

export const StyledButton = withThemeColors<
ThemeColorsProp & ComponentProps<typeof IconButton>
>(
  styled(IconButton)(
    ({ themeColors: { textContrast } }) => ({
      color: textContrast,
    }),
  ),
);

export const StyledListItemIcon = withThemeColors<
ThemeColorsProp & ComponentProps<typeof ListItemIcon>
>(
  styled(ListItemIcon)(
    ({ themeColors: { text } }) => ({
      color: text,
    }),
  ),
);

const VariantMap: Record<ThemeVariant, MdiReactIconComponentType> = {
  light: Brightness4Icon,
  dark: Brightness6Icon,
  system: ThemeLightDarkIcon,
};

export const ThemeSwitcher: FC = () => {
  const { onClose, menu, button } = useMenu<HTMLButtonElement>();
  const { variant, setVariant } = useThemeVariant();
  const MenuIcon = useMemo(
    () => VariantMap[variant || 'system'],
    [variant],
  );
  const selectLightVariant = useCallback(
    () => {
      setVariant('light');
      onClose();
    },
    [setVariant, onClose],
  );
  const selectDarkVariant = useCallback(
    () => {
      setVariant('dark');
      onClose();
    },
    [setVariant, onClose],
  );
  const selectSystemVariant = useCallback(
    () => {
      setVariant('system');
      onClose();
    },
    [setVariant, onClose],
  );
  return (
    <>
      <Tooltip title="Select color scheme">
        <StyledButton {...button}>
          <MenuIcon />
        </StyledButton>
      </Tooltip>
      <Menu {...menu}>
        <MenuItem onClick={selectLightVariant}>
          <StyledListItemIcon>
            <Brightness4Icon />
          </StyledListItemIcon>
          <ListItemText>
            Light
          </ListItemText>
        </MenuItem>
        <MenuItem onClick={selectDarkVariant}>
          <StyledListItemIcon>
            <Brightness6Icon />
          </StyledListItemIcon>
          <ListItemText>
            Dark
          </ListItemText>
        </MenuItem>
        <Tooltip title="Allow system to decide">
          <MenuItem onClick={selectSystemVariant}>
            <StyledListItemIcon>
              <ThemeLightDarkIcon />
            </StyledListItemIcon>
            <ListItemText>
              System
            </ListItemText>
          </MenuItem>
        </Tooltip>
      </Menu>
    </>
  );
};
