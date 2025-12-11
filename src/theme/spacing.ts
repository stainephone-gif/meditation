/**
 * Material Design 3 Spacing & Sizing System
 * 8dp базовая единица (8-point grid system)
 */

// Spacing Scale (8dp base unit)
export const Spacing = {
  xs: 4,    // 0.5x - очень маленькие отступы
  sm: 8,    // 1x - маленькие отступы
  md: 16,   // 2x - средние отступы (стандарт)
  lg: 24,   // 3x - большие отступы
  xl: 32,   // 4x - очень большие отступы
  xxl: 48,  // 6x - огромные отступы
  xxxl: 64, // 8x - максимальные отступы
};

// Border Radius (Material Design 3 рекомендации)
export const BorderRadius = {
  none: 0,
  xs: 4,    // Маленькие элементы (chips, badges)
  sm: 8,    // Кнопки, поля ввода
  md: 12,   // Карточки (стандарт)
  lg: 16,   // Большие карточки
  xl: 24,   // Модальные окна
  xxl: 28,  // Bottom sheets
  full: 999, // Круглые элементы (аватары, кнопки)
};

// Touch Target Sizes (минимум 48dp для Android)
export const TouchTargets = {
  minimum: 48,  // Минимальный размер для касания
  small: 48,    // Маленькая кнопка
  medium: 56,   // Средняя кнопка (стандарт)
  large: 64,    // Большая кнопка
  fab: 56,      // Floating Action Button
  fabExtended: 48, // Extended FAB высота
};

// Icon Sizes
export const IconSizes = {
  xs: 16,   // Очень маленькие иконки
  sm: 20,   // Маленькие иконки
  md: 24,   // Стандартные иконки (Material)
  lg: 32,   // Большие иконки
  xl: 48,   // Очень большие иконки
  xxl: 64,  // Огромные иконки (главный экран)
};

// Elevation (тени) - Material Design 3
export const Elevation = {
  level0: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  level1: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  level2: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  level3: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  level4: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 4,
  },
  level5: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.14,
    shadowRadius: 16,
    elevation: 5,
  },
};

// Component Specific Sizes
export const ComponentSizes = {
  // App Bar (Top Navigation)
  appBar: {
    height: 64,
    heightSmall: 56,
  },

  // Bottom Navigation
  bottomNav: {
    height: 80,
    heightCompact: 64,
  },

  // Cards
  card: {
    minHeight: 120,
    imageHeight: 200,
  },

  // List Items
  listItem: {
    height: 72,
    heightCompact: 56,
    heightTwoLine: 88,
  },

  // Floating Action Button
  fab: {
    size: 56,
    sizeSmall: 40,
    sizeLarge: 96,
  },

  // Chips
  chip: {
    height: 32,
  },

  // Buttons
  button: {
    height: 40,
    heightLarge: 48,
    minWidth: 64,
  },

  // Input Fields
  input: {
    height: 56,
    heightCompact: 48,
  },

  // Modal
  modal: {
    maxWidth: 560,
    minWidth: 280,
  },

  // Bottom Sheet
  bottomSheet: {
    maxHeight: '90%',
    handleWidth: 32,
    handleHeight: 4,
  },
};

// Screen Padding/Margin
export const ScreenSpacing = {
  horizontal: Spacing.md,     // 16dp по бокам
  vertical: Spacing.lg,       // 24dp сверху/снизу
  section: Spacing.xl,        // 32dp между секциями
};

// Grid System
export const Grid = {
  columns: 12,
  gutter: Spacing.md,
  margin: Spacing.md,
};

// Animation Durations (Material Motion)
export const Duration = {
  shortest: 150,    // Простые переходы
  shorter: 200,     // Появление элементов
  short: 250,       // Основные анимации
  standard: 300,    // Стандартная длительность
  complex: 375,     // Сложные анимации
  enteringScreen: 225,
  leavingScreen: 195,
};

// Animation Easing (Material Motion)
export const Easing = {
  standard: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
  decelerate: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
  accelerate: 'cubic-bezier(0.4, 0.0, 1, 1)',
  sharp: 'cubic-bezier(0.4, 0.0, 0.6, 1)',
};

// Z-Index Layers
export const ZIndex = {
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
};

// Opacity Levels
export const Opacity = {
  disabled: 0.38,
  hovered: 0.08,
  pressed: 0.12,
  focused: 0.12,
  selected: 0.16,
  activated: 0.24,
};

export default {
  Spacing,
  BorderRadius,
  TouchTargets,
  IconSizes,
  Elevation,
  ComponentSizes,
  ScreenSpacing,
  Grid,
  Duration,
  Easing,
  ZIndex,
  Opacity,
};
