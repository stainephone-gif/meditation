import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  View,
} from 'react-native';
import { lightTheme } from '../../theme';

interface ChipProps {
  label: string;
  onPress?: () => void;
  variant?: 'filled' | 'outlined';
  selected?: boolean;
  icon?: React.ReactNode;
  color?: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

/**
 * Material Design 3 Chip Component
 * Используется для категорий, тегов, фильтров
 */
const Chip: React.FC<ChipProps> = ({
  label,
  onPress,
  variant = 'filled',
  selected = false,
  icon,
  color,
  style,
  textStyle,
}) => {
  const theme = lightTheme;

  const getVariantStyles = (): { container: ViewStyle; text: TextStyle } => {
    const baseColor = color || theme.colors.primary;

    if (variant === 'filled') {
      return {
        container: {
          backgroundColor: selected
            ? baseColor
            : theme.colors.surfaceVariant,
        },
        text: {
          color: selected
            ? theme.colors.onPrimary
            : theme.colors.onSurfaceVariant,
        },
      };
    } else {
      return {
        container: {
          backgroundColor: 'transparent',
          borderWidth: 1,
          borderColor: selected ? baseColor : theme.colors.outline,
        },
        text: {
          color: selected ? baseColor : theme.colors.onSurfaceVariant,
        },
      };
    }
  };

  const variantStyles = getVariantStyles();

  const chipContent = (
    <View style={[styles.container, variantStyles.container, style]}>
      {icon && <View style={styles.icon}>{icon}</View>}
      <Text
        style={[
          styles.text,
          theme.typography.labelMedium,
          variantStyles.text,
          textStyle,
        ]}
      >
        {label}
      </Text>
    </View>
  );

  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        {chipContent}
      </TouchableOpacity>
    );
  }

  return chipContent;
};

const styles = StyleSheet.create({
  container: {
    height: lightTheme.componentSizes.chip.height,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: lightTheme.spacing.md,
    borderRadius: lightTheme.borderRadius.sm,
  },
  icon: {
    marginRight: lightTheme.spacing.xs,
  },
  text: {
    fontWeight: '500',
  },
});

export default Chip;
