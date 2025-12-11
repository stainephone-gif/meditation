import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  View,
  Text,
} from 'react-native';
import { lightTheme } from '../../theme';

interface FABProps {
  icon: React.ReactNode;
  onPress: () => void;
  label?: string;
  size?: 'small' | 'medium' | 'large';
  extended?: boolean;
  style?: ViewStyle;
}

/**
 * Material Design 3 Floating Action Button
 * Главная кнопка действия на экране
 */
const FAB: React.FC<FABProps> = ({
  icon,
  onPress,
  label,
  size = 'medium',
  extended = false,
  style,
}) => {
  const theme = lightTheme;

  const getSizeStyles = (): ViewStyle => {
    if (extended) {
      return {
        height: theme.componentSizes.fab.size,
        paddingHorizontal: theme.spacing.lg,
        borderRadius: theme.borderRadius.md,
      };
    }

    switch (size) {
      case 'small':
        return {
          width: theme.componentSizes.fab.sizeSmall,
          height: theme.componentSizes.fab.sizeSmall,
        };
      case 'large':
        return {
          width: theme.componentSizes.fab.sizeLarge,
          height: theme.componentSizes.fab.sizeLarge,
        };
      case 'medium':
      default:
        return {
          width: theme.componentSizes.fab.size,
          height: theme.componentSizes.fab.size,
        };
    }
  };

  const sizeStyles = getSizeStyles();

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      style={[
        styles.container,
        sizeStyles,
        !extended && styles.circular,
        style,
      ]}
    >
      <View style={styles.content}>
        <View style={[styles.icon, extended && label && styles.iconWithLabel]}>
          {icon}
        </View>
        {extended && label && (
          <Text
            style={[
              styles.label,
              theme.typography.labelLarge,
              { color: theme.colors.onPrimaryContainer },
            ]}
          >
            {label}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: lightTheme.colors.primaryContainer,
    justifyContent: 'center',
    alignItems: 'center',
    ...lightTheme.elevation.level3,
  },
  circular: {
    borderRadius: lightTheme.borderRadius.full,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconWithLabel: {
    marginRight: lightTheme.spacing.sm,
  },
  label: {
    fontWeight: '600',
  },
});

export default FAB;
