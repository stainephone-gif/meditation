/**
 * Material Design 3 Typography System
 * Современная типографика с поддержкой различных размеров экрана
 */

import { TextStyle } from 'react-native';

// Семейства шрифтов
export const FontFamilies = {
  regular: 'System',           // Roboto на Android
  medium: 'System',
  bold: 'System',
  black: 'System',
};

// Веса шрифтов
export const FontWeights = {
  regular: '400' as TextStyle['fontWeight'],
  medium: '500' as TextStyle['fontWeight'],
  semiBold: '600' as TextStyle['fontWeight'],
  bold: '700' as TextStyle['fontWeight'],
  black: '900' as TextStyle['fontWeight'],
};

/**
 * Material Design 3 Typography Scale
 */
export const Typography = {
  // Display - самые крупные заголовки (главный экран, splash)
  displayLarge: {
    fontFamily: FontFamilies.regular,
    fontWeight: FontWeights.regular,
    fontSize: 57,
    lineHeight: 64,
    letterSpacing: -0.25,
  } as TextStyle,

  displayMedium: {
    fontFamily: FontFamilies.regular,
    fontWeight: FontWeights.regular,
    fontSize: 45,
    lineHeight: 52,
    letterSpacing: 0,
  } as TextStyle,

  displaySmall: {
    fontFamily: FontFamilies.regular,
    fontWeight: FontWeights.regular,
    fontSize: 36,
    lineHeight: 44,
    letterSpacing: 0,
  } as TextStyle,

  // Headline - заголовки секций
  headlineLarge: {
    fontFamily: FontFamilies.regular,
    fontWeight: FontWeights.regular,
    fontSize: 32,
    lineHeight: 40,
    letterSpacing: 0,
  } as TextStyle,

  headlineMedium: {
    fontFamily: FontFamilies.regular,
    fontWeight: FontWeights.regular,
    fontSize: 28,
    lineHeight: 36,
    letterSpacing: 0,
  } as TextStyle,

  headlineSmall: {
    fontFamily: FontFamilies.regular,
    fontWeight: FontWeights.regular,
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: 0,
  } as TextStyle,

  // Title - заголовки карточек и списков
  titleLarge: {
    fontFamily: FontFamilies.regular,
    fontWeight: FontWeights.medium,
    fontSize: 22,
    lineHeight: 28,
    letterSpacing: 0,
  } as TextStyle,

  titleMedium: {
    fontFamily: FontFamilies.medium,
    fontWeight: FontWeights.medium,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.15,
  } as TextStyle,

  titleSmall: {
    fontFamily: FontFamilies.medium,
    fontWeight: FontWeights.medium,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.1,
  } as TextStyle,

  // Body - основной текст
  bodyLarge: {
    fontFamily: FontFamilies.regular,
    fontWeight: FontWeights.regular,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.5,
  } as TextStyle,

  bodyMedium: {
    fontFamily: FontFamilies.regular,
    fontWeight: FontWeights.regular,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.25,
  } as TextStyle,

  bodySmall: {
    fontFamily: FontFamilies.regular,
    fontWeight: FontWeights.regular,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.4,
  } as TextStyle,

  // Label - текст кнопок и ярлыков
  labelLarge: {
    fontFamily: FontFamilies.medium,
    fontWeight: FontWeights.medium,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.1,
  } as TextStyle,

  labelMedium: {
    fontFamily: FontFamilies.medium,
    fontWeight: FontWeights.medium,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.5,
  } as TextStyle,

  labelSmall: {
    fontFamily: FontFamilies.medium,
    fontWeight: FontWeights.medium,
    fontSize: 11,
    lineHeight: 16,
    letterSpacing: 0.5,
  } as TextStyle,
};

// Helper функция для создания текстового стиля с цветом
export const createTextStyle = (
  typographyStyle: keyof typeof Typography,
  color: string,
  additionalStyles?: TextStyle
): TextStyle => {
  return {
    ...Typography[typographyStyle],
    color,
    ...additionalStyles,
  };
};

// Готовые комбинации для частых случаев
export const TextStyles = {
  // Заголовки экранов
  screenTitle: {
    ...Typography.headlineLarge,
    fontWeight: FontWeights.bold,
  } as TextStyle,

  // Заголовки карточек
  cardTitle: {
    ...Typography.titleLarge,
    fontWeight: FontWeights.semiBold,
  } as TextStyle,

  // Описания
  description: {
    ...Typography.bodyMedium,
  } as TextStyle,

  // Кнопки
  button: {
    ...Typography.labelLarge,
    fontWeight: FontWeights.semiBold,
    textTransform: 'uppercase',
  } as TextStyle,

  // Метки (badges, chips)
  badge: {
    ...Typography.labelSmall,
    fontWeight: FontWeights.semiBold,
  } as TextStyle,

  // Числа (статистика)
  number: {
    fontFamily: FontFamilies.bold,
    fontWeight: FontWeights.bold,
    fontSize: 32,
    lineHeight: 40,
    letterSpacing: 0,
  } as TextStyle,
};

export default Typography;
