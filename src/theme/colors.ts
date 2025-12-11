/**
 * Material Design 3 Color System
 * Современная цветовая палитра с поддержкой светлой и темной темы
 */

export const Colors = {
  light: {
    // Primary Colors - главные акцентные цвета
    primary: '#6B4CE6',           // Глубокий фиолетовый
    onPrimary: '#FFFFFF',         // Текст на primary
    primaryContainer: '#E7DEFF',  // Светлый контейнер
    onPrimaryContainer: '#21005E', // Текст на контейнере

    // Secondary Colors - второстепенные акценты
    secondary: '#4ECDC4',          // Бирюзовый
    onSecondary: '#FFFFFF',
    secondaryContainer: '#C8F2EF',
    onSecondaryContainer: '#002726',

    // Tertiary Colors - третичные акценты
    tertiary: '#ED64A6',           // Розовый
    onTertiary: '#FFFFFF',
    tertiaryContainer: '#FFD9E7',
    onTertiaryContainer: '#3E001D',

    // Error Colors
    error: '#BA1A1A',
    onError: '#FFFFFF',
    errorContainer: '#FFDAD6',
    onErrorContainer: '#410002',

    // Background & Surface
    background: '#F7F9FC',         // Светлый фон
    onBackground: '#1A1B1F',       // Текст на фоне
    surface: '#FFFFFF',            // Поверхности (карточки)
    onSurface: '#1A1B1F',
    surfaceVariant: '#E3E2EC',     // Вариант поверхности
    onSurfaceVariant: '#46464F',

    // Outline & Borders
    outline: '#777680',
    outlineVariant: '#C7C5D0',

    // Inverse Colors (для темных элементов на светлом фоне)
    inverseSurface: '#2F3033',
    inverseOnSurface: '#F2F0F4',
    inversePrimary: '#D0BCFF',

    // Shadow & Overlay
    shadow: '#000000',
    scrim: '#000000',

    // Custom Colors для категорий
    stress: '#4ECDC4',             // Бирюзовый для стресса
    sleep: '#6B4CE6',              // Фиолетовый для сна
    focus: '#ED64A6',              // Розовый для фокуса
    energy: '#F6AD55',             // Оранжевый для энергии
    gratitude: '#48BB78',          // Зеленый для благодарности
    bodyScan: '#9F7AEA',           // Лавандовый для сканирования тела

    // Gradient Colors
    gradient: {
      primary: ['#6B4CE6', '#9F7AEA'],
      secondary: ['#4ECDC4', '#5FD3CA'],
      tertiary: ['#ED64A6', '#F687B3'],
      calm: ['#667EEA', '#764BA2'],
      sunset: ['#F6AD55', '#ED8936'],
      ocean: ['#4299E1', '#3182CE'],
    },
  },

  dark: {
    // Primary Colors
    primary: '#D0BCFF',            // Светлый фиолетовый
    onPrimary: '#381E72',
    primaryContainer: '#4F378B',
    onPrimaryContainer: '#E7DEFF',

    // Secondary Colors
    secondary: '#5FD3CA',          // Светлая бирюза
    onSecondary: '#00504E',
    secondaryContainer: '#006A66',
    onSecondaryContainer: '#C8F2EF',

    // Tertiary Colors
    tertiary: '#F687B3',           // Светлый розовый
    onTertiary: '#5E1133',
    tertiaryContainer: '#7C2947',
    onTertiaryContainer: '#FFD9E7',

    // Error Colors
    error: '#FFB4AB',
    onError: '#690005',
    errorContainer: '#93000A',
    onErrorContainer: '#FFDAD6',

    // Background & Surface
    background: '#1A1B1F',         // Темный фон
    onBackground: '#E3E2E6',
    surface: '#1A1B1F',
    onSurface: '#E3E2E6',
    surfaceVariant: '#46464F',
    onSurfaceVariant: '#C7C5D0',

    // Outline & Borders
    outline: '#91909A',
    outlineVariant: '#46464F',

    // Inverse Colors
    inverseSurface: '#E3E2E6',
    inverseOnSurface: '#1A1B1F',
    inversePrimary: '#6B4CE6',

    // Shadow & Overlay
    shadow: '#000000',
    scrim: '#000000',

    // Custom Colors для категорий
    stress: '#5FD3CA',
    sleep: '#D0BCFF',
    focus: '#F687B3',
    energy: '#FBD38D',
    gratitude: '#68D391',
    bodyScan: '#B794F4',

    // Gradient Colors
    gradient: {
      primary: ['#D0BCFF', '#B794F4'],
      secondary: ['#5FD3CA', '#4ECDC4'],
      tertiary: ['#F687B3', '#ED64A6'],
      calm: ['#9F7AEA', '#805AD5'],
      sunset: ['#FBD38D', '#F6AD55'],
      ocean: ['#63B3ED', '#4299E1'],
    },
  },
};

// Helper функция для получения цвета по теме
export const getColor = (theme: 'light' | 'dark', colorName: keyof typeof Colors.light) => {
  return Colors[theme][colorName];
};

// Helper для градиентов
export const getGradient = (theme: 'light' | 'dark', gradientName: keyof typeof Colors.light.gradient) => {
  return Colors[theme].gradient[gradientName];
};

// Helper для цвета категории
export const getCategoryColor = (category: string, theme: 'light' | 'dark' = 'light') => {
  const categoryColors = {
    stress: Colors[theme].stress,
    sleep: Colors[theme].sleep,
    focus: Colors[theme].focus,
    energy: Colors[theme].energy,
    gratitude: Colors[theme].gratitude,
    'body-scan': Colors[theme].bodyScan,
  };
  return categoryColors[category as keyof typeof categoryColors] || Colors[theme].primary;
};

export default Colors;
