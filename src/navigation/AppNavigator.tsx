import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StyleSheet } from 'react-native';
import { lightTheme } from '../theme';

// Placeholder для экранов (заменим позже)
const HomeScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.text}>Главная</Text>
  </View>
);

const MeditationsScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.text}>Медитации</Text>
  </View>
);

const BreathingScreenPlaceholder = () => (
  <View style={styles.screen}>
    <Text style={styles.text}>Дыхание</Text>
  </View>
);

const SoundsScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.text}>Звуки</Text>
  </View>
);

const ProgressScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.text}>Прогресс</Text>
  </View>
);

const Tab = createBottomTabNavigator();

/**
 * Material Design 3 Navigation
 * Bottom Navigation Bar с правильной UX для Android
 */
const AppNavigator: React.FC = () => {
  const theme = lightTheme;

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          // Стили Bottom Navigation Bar
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.onSurfaceVariant,
          tabBarStyle: {
            height: theme.componentSizes.bottomNav.height,
            backgroundColor: theme.colors.surface,
            borderTopWidth: 0,
            ...theme.elevation.level2,
            paddingBottom: theme.spacing.sm,
            paddingTop: theme.spacing.sm,
          },
          tabBarLabelStyle: {
            ...theme.typography.labelMedium,
            fontWeight: '500',
            marginTop: 4,
          },
          tabBarIconStyle: {
            marginTop: theme.spacing.xs,
          },
          // Стили заголовка
          headerStyle: {
            backgroundColor: theme.colors.surface,
            ...theme.elevation.level0,
            height: theme.componentSizes.appBar.height,
          },
          headerTitleStyle: {
            ...theme.typography.titleLarge,
            color: theme.colors.onSurface,
            fontWeight: '600',
          },
          headerShadowVisible: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Главная',
            tabBarIcon: ({ color, size }) => (
              <Text style={{ fontSize: size, color }}>🏠</Text>
            ),
          }}
        />
        <Tab.Screen
          name="Meditations"
          component={MeditationsScreen}
          options={{
            title: 'Медитации',
            tabBarIcon: ({ color, size }) => (
              <Text style={{ fontSize: size, color }}>🧘</Text>
            ),
          }}
        />
        <Tab.Screen
          name="Breathing"
          component={BreathingScreenPlaceholder}
          options={{
            title: 'Дыхание',
            tabBarIcon: ({ color, size }) => (
              <Text style={{ fontSize: size, color }}>💨</Text>
            ),
          }}
        />
        <Tab.Screen
          name="Sounds"
          component={SoundsScreen}
          options={{
            title: 'Звуки',
            tabBarIcon: ({ color, size }) => (
              <Text style={{ fontSize: size, color }}>🎵</Text>
            ),
          }}
        />
        <Tab.Screen
          name="Progress"
          component={ProgressScreen}
          options={{
            title: 'Прогресс',
            tabBarIcon: ({ color, size }) => (
              <Text style={{ fontSize: size, color }}>📊</Text>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: lightTheme.colors.background,
  },
  text: {
    ...lightTheme.typography.headlineMedium,
    color: lightTheme.colors.onBackground,
  },
});

export default AppNavigator;
