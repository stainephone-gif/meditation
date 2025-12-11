import React from 'react';
import {
  View,
  StyleSheet,
  ViewStyle,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import { lightTheme } from '../../theme';

interface CardProps {
  children: React.ReactNode;
  onPress?: () => void;
  variant?: 'elevated' | 'filled' | 'outlined';
  style?: ViewStyle;
  elevation?: keyof typeof lightTheme.elevation;
}

/**
 * Material Design 3 Card Component
 * Поддерживает варианты: elevated (с тенью), filled (с фоном), outlined (с границей)
 */
const Card: React.FC<CardProps> = ({
  children,
  onPress,
  variant = 'elevated',
  style,
  elevation = 'level2',
}) => {
  const theme = lightTheme;

  // Стили для разных вариантов
  const getVariantStyles = (): ViewStyle => {
    switch (variant) {
      case 'elevated':
        return {
          backgroundColor: theme.colors.surface,
          ...theme.elevation[elevation],
        };
      case 'filled':
        return {
          backgroundColor: theme.colors.surfaceVariant,
          ...theme.elevation.level0,
        };
      case 'outlined':
        return {
          backgroundColor: theme.colors.surface,
          borderWidth: 1,
          borderColor: theme.colors.outlineVariant,
          ...theme.elevation.level0,
        };
      default:
        return {};
    }
  };

  const variantStyles = getVariantStyles();

  const cardContent = (
    <View style={[styles.container, variantStyles, style]}>{children}</View>
  );

  if (onPress) {
    return (
      <Pressable
        onPress={onPress}
        android_ripple={{
          color: theme.colors.primary,
          borderless: false,
        }}
        style={({ pressed }) => [
          pressed && styles.pressed,
        ]}
      >
        {cardContent}
      </Pressable>
    );
  }

  return cardContent;
};

const styles = StyleSheet.create({
  container: {
    borderRadius: lightTheme.borderRadius.md,
    overflow: 'hidden',
  },
  pressed: {
    opacity: 0.9,
  },
});

export default Card;
