import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
  View,
} from 'react-native';
import { lightTheme } from '../../theme';

interface ButtonProps {
  children: string;
  onPress: () => void;
  variant?: 'filled' | 'outlined' | 'text';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  fullWidth?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

/**
 * Material Design 3 Button Component
 * Поддерживает 3 варианта: filled, outlined, text
 */
const Button: React.FC<ButtonProps> = ({
  children,
  onPress,
  variant = 'filled',
  size = 'medium',
  disabled = false,
  loading = false,
  icon,
  fullWidth = false,
  style,
  textStyle,
}) => {
  const theme = lightTheme;

  // Определяем стили на основе варианта
  const getVariantStyles = (): { container: ViewStyle; text: TextStyle } => {
    switch (variant) {
      case 'filled':
        return {
          container: {
            backgroundColor: disabled
              ? theme.colors.surfaceVariant
              : theme.colors.primary,
            ...theme.elevation.level0,
          },
          text: {
            color: disabled ? theme.colors.onSurfaceVariant : theme.colors.onPrimary,
          },
        };
      case 'outlined':
        return {
          container: {
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderColor: disabled
              ? theme.colors.outlineVariant
              : theme.colors.outline,
          },
          text: {
            color: disabled ? theme.colors.onSurfaceVariant : theme.colors.primary,
          },
        };
      case 'text':
        return {
          container: {
            backgroundColor: 'transparent',
          },
          text: {
            color: disabled ? theme.colors.onSurfaceVariant : theme.colors.primary,
          },
        };
      default:
        return {
          container: {},
          text: {},
        };
    }
  };

  // Размеры кнопки
  const getSizeStyles = (): ViewStyle => {
    switch (size) {
      case 'small':
        return {
          height: theme.componentSizes.button.height,
          paddingHorizontal: theme.spacing.md,
        };
      case 'large':
        return {
          height: theme.componentSizes.button.heightLarge,
          paddingHorizontal: theme.spacing.xl,
        };
      case 'medium':
      default:
        return {
          height: theme.componentSizes.button.heightLarge,
          paddingHorizontal: theme.spacing.lg,
        };
    }
  };

  const variantStyles = getVariantStyles();
  const sizeStyles = getSizeStyles();

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
      style={[
        styles.container,
        variantStyles.container,
        sizeStyles,
        fullWidth && styles.fullWidth,
        disabled && styles.disabled,
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator
          color={
            variant === 'filled' ? theme.colors.onPrimary : theme.colors.primary
          }
        />
      ) : (
        <View style={styles.content}>
          {icon && <View style={styles.icon}>{icon}</View>}
          <Text
            style={[
              styles.text,
              theme.typography.labelLarge,
              variantStyles.text,
              textStyle,
            ]}
          >
            {children}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: lightTheme.borderRadius.full,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: lightTheme.componentSizes.button.minWidth,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  icon: {
    marginRight: lightTheme.spacing.sm,
  },
  fullWidth: {
    width: '100%',
  },
  disabled: {
    opacity: lightTheme.opacity.disabled,
  },
});

export default Button;
