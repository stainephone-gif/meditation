/**
 * MindPeace Design System
 * Полная дизайн-система в стиле Material Design 3
 */

import Colors from './colors';
import Typography from './typography';
import {
  Spacing,
  BorderRadius,
  TouchTargets,
  IconSizes,
  Elevation,
  ComponentSizes,
  ScreenSpacing,
  Duration,
  Easing,
  ZIndex,
  Opacity,
} from './spacing';

// Объединенная тема
export interface Theme {
  colors: typeof Colors.light;
  typography: typeof Typography;
  spacing: typeof Spacing;
  borderRadius: typeof BorderRadius;
  touchTargets: typeof TouchTargets;
  iconSizes: typeof IconSizes;
  elevation: typeof Elevation;
  componentSizes: typeof ComponentSizes;
  screenSpacing: typeof ScreenSpacing;
  duration: typeof Duration;
  easing: typeof Easing;
  zIndex: typeof ZIndex;
  opacity: typeof Opacity;
  isDark: boolean;
}

// Создание темы
export const createTheme = (mode: 'light' | 'dark' = 'light'): Theme => ({
  colors: Colors[mode],
  typography: Typography,
  spacing: Spacing,
  borderRadius: BorderRadius,
  touchTargets: TouchTargets,
  iconSizes: IconSizes,
  elevation: Elevation,
  componentSizes: ComponentSizes,
  screenSpacing: ScreenSpacing,
  duration: Duration,
  easing: Easing,
  zIndex: ZIndex,
  opacity: Opacity,
  isDark: mode === 'dark',
});

// Дефолтные темы
export const lightTheme = createTheme('light');
export const darkTheme = createTheme('dark');

// Экспорт всех частей для прямого использования
export { Colors, Typography, Spacing, BorderRadius, Elevation };

// Вспомогательные типы
export type ColorName = keyof typeof Colors.light;
export type TypographyVariant = keyof typeof Typography;

export default {
  light: lightTheme,
  dark: darkTheme,
  createTheme,
};
