# 📘 Примеры использования UI компонентов

## Импорт компонентов

```typescript
// Импорт UI компонентов
import { Button, Card, Chip, FAB } from './components/ui';

// Импорт темы
import { lightTheme, darkTheme } from './theme';

// Импорт отдельных частей темы
import { Colors, Typography, Spacing } from './theme';
```

## 🔘 Button (Кнопка)

### Filled Button (основная кнопка)
```tsx
<Button
  onPress={() => console.log('Нажата')}
  variant="filled"
  size="medium"
>
  Начать медитацию
</Button>
```

### Outlined Button (второстепенная кнопка)
```tsx
<Button
  onPress={() => console.log('Нажата')}
  variant="outlined"
  size="medium"
>
  Узнать больше
</Button>
```

### Text Button (минимальная кнопка)
```tsx
<Button
  onPress={() => console.log('Нажата')}
  variant="text"
  size="small"
>
  Пропустить
</Button>
```

### С иконкой
```tsx
<Button
  onPress={() => console.log('Нажата')}
  variant="filled"
  icon={<Text style={{ fontSize: 20 }}>▶️</Text>}
>
  Воспроизвести
</Button>
```

### Loading состояние
```tsx
<Button
  onPress={() => {}}
  variant="filled"
  loading={true}
>
  Загрузка...
</Button>
```

### Disabled состояние
```tsx
<Button
  onPress={() => {}}
  variant="filled"
  disabled={true}
>
  Недоступна
</Button>
```

### Full width
```tsx
<Button
  onPress={() => console.log('Нажата')}
  variant="filled"
  fullWidth
>
  Продолжить
</Button>
```

## 🗂️ Card (Карточка)

### Elevated Card (с тенью)
```tsx
<Card
  variant="elevated"
  elevation="level2"
  onPress={() => console.log('Карточка нажата')}
>
  <View style={{ padding: 16 }}>
    <Text>Содержимое карточки</Text>
  </View>
</Card>
```

### Filled Card (с фоном)
```tsx
<Card variant="filled">
  <View style={{ padding: 16 }}>
    <Text>Quick Action</Text>
  </View>
</Card>
```

### Outlined Card (с границей)
```tsx
<Card variant="outlined">
  <View style={{ padding: 16 }}>
    <Text>Информация</Text>
  </View>
</Card>
```

### Карточка медитации
```tsx
<Card
  variant="elevated"
  elevation="level3"
  onPress={() => navigateToMeditation(meditation.id)}
  style={{ marginBottom: 16 }}
>
  {/* Hero Image */}
  <View style={{ height: 200 }}>
    <LinearGradient
      colors={['#667EEA', '#764BA2']}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <Text style={{ fontSize: 48 }}>🧘</Text>
    </LinearGradient>
  </View>

  {/* Content */}
  <View style={{ padding: 16 }}>
    <Chip label="СТРЕСС" variant="filled" />
    <Text style={{ fontSize: 18, fontWeight: '600', marginTop: 8 }}>
      Снятие стресса
    </Text>
    <Text style={{ fontSize: 14, color: '#666', marginTop: 4 }}>
      10 минут
    </Text>
  </View>
</Card>
```

## 🏷️ Chip (Чип)

### Filled Chip
```tsx
<Chip
  label="Стресс"
  variant="filled"
  onPress={() => setCategory('stress')}
/>
```

### Outlined Chip
```tsx
<Chip
  label="Все"
  variant="outlined"
  onPress={() => setCategory('all')}
/>
```

### Selected Chip
```tsx
<Chip
  label="Фокус"
  variant="filled"
  selected={selectedCategory === 'focus'}
  onPress={() => setCategory('focus')}
/>
```

### С иконкой
```tsx
<Chip
  label="Сон"
  variant="filled"
  icon={<Text>😴</Text>}
  onPress={() => setCategory('sleep')}
/>
```

### С кастомным цветом
```tsx
<Chip
  label="ЭНЕРГИЯ"
  variant="filled"
  color="#F6AD55"
  selected={true}
/>
```

### Группа фильтров
```tsx
<ScrollView horizontal showsHorizontalScrollIndicator={false}>
  {categories.map((category) => (
    <Chip
      key={category.id}
      label={category.label}
      variant="filled"
      selected={selectedCategory === category.id}
      onPress={() => setSelectedCategory(category.id)}
      style={{ marginRight: 8 }}
    />
  ))}
</ScrollView>
```

## 🎯 FAB (Floating Action Button)

### Regular FAB
```tsx
<FAB
  icon={<Text style={{ fontSize: 24 }}>+</Text>}
  onPress={() => console.log('FAB нажат')}
  style={{
    position: 'absolute',
    right: 16,
    bottom: 16,
  }}
/>
```

### Extended FAB (с текстом)
```tsx
<FAB
  icon={<Text style={{ fontSize: 24 }}>▶️</Text>}
  label="Быстрый старт"
  extended
  onPress={() => startMeditation()}
  style={{
    position: 'absolute',
    right: 16,
    bottom: 16,
  }}
/>
```

### Small FAB
```tsx
<FAB
  icon={<Text style={{ fontSize: 16 }}>+</Text>}
  size="small"
  onPress={() => addNew()}
/>
```

### Large FAB
```tsx
<FAB
  icon={<Text style={{ fontSize: 32 }}>🎵</Text>}
  size="large"
  onPress={() => playSound()}
/>
```

## 🎨 Использование темы

### Цвета
```tsx
import { lightTheme } from './theme';

const MyComponent = () => {
  const theme = lightTheme;

  return (
    <View style={{ backgroundColor: theme.colors.background }}>
      <Text style={{ color: theme.colors.onBackground }}>
        Текст
      </Text>
    </View>
  );
};
```

### Типографика
```tsx
import { lightTheme } from './theme';

<Text
  style={[
    lightTheme.typography.headlineLarge,
    { color: lightTheme.colors.onBackground }
  ]}
>
  Заголовок
</Text>
```

### Spacing
```tsx
import { lightTheme } from './theme';

<View
  style={{
    padding: lightTheme.spacing.md, // 16dp
    margin: lightTheme.spacing.lg,  // 24dp
  }}
>
  <Text>Контент</Text>
</View>
```

### Elevation (тень)
```tsx
import { lightTheme } from './theme';

<View
  style={[
    {
      backgroundColor: lightTheme.colors.surface,
      borderRadius: lightTheme.borderRadius.md,
    },
    lightTheme.elevation.level2, // Тень
  ]}
>
  <Text>Карточка с тенью</Text>
</View>
```

### Gradient Background
```tsx
import LinearGradient from 'react-native-linear-gradient';
import { lightTheme } from './theme';

<LinearGradient
  colors={lightTheme.colors.gradient.calm}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 1 }}
  style={{ flex: 1 }}
>
  <Text>Содержимое</Text>
</LinearGradient>
```

## 📱 Экран с полным примером

```tsx
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { lightTheme } from '../theme';
import { Button, Card, Chip, FAB } from '../components/ui';

const ExampleScreen = () => {
  const theme = lightTheme;
  const [selectedCategory, setSelectedCategory] = React.useState('all');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Медитации</Text>
          <Text style={styles.subtitle}>
            Выберите практику для сегодня
          </Text>
        </View>

        {/* Categories */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categories}
        >
          <Chip
            label="Все"
            selected={selectedCategory === 'all'}
            onPress={() => setSelectedCategory('all')}
            style={styles.chip}
          />
          <Chip
            label="Стресс"
            selected={selectedCategory === 'stress'}
            onPress={() => setSelectedCategory('stress')}
            style={styles.chip}
          />
          <Chip
            label="Сон"
            selected={selectedCategory === 'sleep'}
            onPress={() => setSelectedCategory('sleep')}
            style={styles.chip}
          />
        </ScrollView>

        {/* Cards Grid */}
        <View style={styles.grid}>
          <Card
            variant="elevated"
            onPress={() => console.log('Карточка 1')}
            style={styles.card}
          >
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Снятие стресса</Text>
              <Text style={styles.cardSubtitle}>10 минут</Text>
            </View>
          </Card>

          <Card
            variant="elevated"
            onPress={() => console.log('Карточка 2')}
            style={styles.card}
          >
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Глубокий сон</Text>
              <Text style={styles.cardSubtitle}>20 минут</Text>
            </View>
          </Card>
        </View>

        {/* Button */}
        <View style={styles.buttonContainer}>
          <Button
            variant="filled"
            onPress={() => console.log('Начать')}
            fullWidth
          >
            Начать практику
          </Button>
        </View>
      </ScrollView>

      {/* FAB */}
      <FAB
        icon={<Text style={{ fontSize: 24 }}>▶️</Text>}
        label="Быстрый старт"
        extended
        onPress={() => console.log('FAB')}
        style={styles.fab}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightTheme.colors.background,
  },
  header: {
    padding: lightTheme.spacing.lg,
  },
  title: {
    ...lightTheme.typography.displaySmall,
    color: lightTheme.colors.onBackground,
    fontWeight: '700',
  },
  subtitle: {
    ...lightTheme.typography.bodyLarge,
    color: lightTheme.colors.onSurfaceVariant,
    marginTop: lightTheme.spacing.sm,
  },
  categories: {
    paddingHorizontal: lightTheme.spacing.lg,
    marginBottom: lightTheme.spacing.lg,
  },
  chip: {
    marginRight: lightTheme.spacing.sm,
  },
  grid: {
    paddingHorizontal: lightTheme.spacing.lg,
  },
  card: {
    marginBottom: lightTheme.spacing.md,
  },
  cardContent: {
    padding: lightTheme.spacing.lg,
  },
  cardTitle: {
    ...lightTheme.typography.titleLarge,
    color: lightTheme.colors.onSurface,
    fontWeight: '600',
  },
  cardSubtitle: {
    ...lightTheme.typography.bodyMedium,
    color: lightTheme.colors.onSurfaceVariant,
    marginTop: 4,
  },
  buttonContainer: {
    padding: lightTheme.spacing.lg,
  },
  fab: {
    position: 'absolute',
    right: lightTheme.spacing.lg,
    bottom: lightTheme.spacing.lg,
  },
});

export default ExampleScreen;
```

## 🎨 Кастомизация компонентов

### Кастомные стили для Button
```tsx
<Button
  onPress={() => {}}
  variant="filled"
  style={{
    backgroundColor: '#FF6B6B',
    borderRadius: 20,
    paddingHorizontal: 32,
  }}
  textStyle={{
    fontSize: 16,
    fontWeight: '700',
  }}
>
  Кастомная кнопка
</Button>
```

### Кастомная Card с градиентом
```tsx
<Card variant="elevated" elevation="level3">
  <LinearGradient
    colors={['#667EEA', '#764BA2']}
    style={{ padding: 24, borderRadius: 12 }}
  >
    <Text style={{ color: '#FFF', fontSize: 20, fontWeight: '600' }}>
      Градиентная карточка
    </Text>
  </LinearGradient>
</Card>
```

## 🌙 Dark Mode

```tsx
import { darkTheme } from './theme';

const MyComponent = () => {
  const [isDark, setIsDark] = React.useState(false);
  const theme = isDark ? darkTheme : lightTheme;

  return (
    <View style={{ backgroundColor: theme.colors.background }}>
      <Button
        onPress={() => setIsDark(!isDark)}
        variant="filled"
      >
        Переключить тему
      </Button>
    </View>
  );
};
```

## 📱 Адаптивный дизайн

```tsx
import { Dimensions } from 'react-native';
import { lightTheme } from './theme';

const { width } = Dimensions.get('window');
const isSmallDevice = width < 360;
const isMediumDevice = width >= 360 && width < 400;
const isLargeDevice = width >= 400;

<Text
  style={{
    fontSize: isSmallDevice ? 24 : isMediumDevice ? 28 : 32,
    padding: lightTheme.spacing.md,
  }}
>
  Адаптивный текст
</Text>
```

---

**Все компоненты следуют Material Design 3 guidelines и оптимизированы для Android!**
