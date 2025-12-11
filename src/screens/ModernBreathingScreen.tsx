import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Dimensions,
  Pressable,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { lightTheme } from '../theme';
import Card from '../components/ui/Card';
import Chip from '../components/ui/Chip';
import Button from '../components/ui/Button';
import FAB from '../components/ui/FAB';
import BreathingCircle from '../components/BreathingCircle';
import { breathingPatterns, BreathingPattern } from '../data/breathingPatterns';

const { width } = Dimensions.get('window');

/**
 * Современный экран дыхательных техник
 * Material Design 3 с правильной UX
 */
const ModernBreathingScreen: React.FC = () => {
  const theme = lightTheme;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPattern, setSelectedPattern] = useState<BreathingPattern | null>(
    null
  );
  const [isActive, setIsActive] = useState(false);

  const categories = [
    { id: 'all', label: 'Все', icon: '✨' },
    { id: 'sleep', label: 'Сон', icon: '😴' },
    { id: 'stress', label: 'Стресс', icon: '😌' },
    { id: 'focus', label: 'Фокус', icon: '🎯' },
    { id: 'energy', label: 'Энергия', icon: '⚡' },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return theme.colors.stress;
      case 'intermediate':
        return theme.colors.focus;
      case 'advanced':
        return theme.colors.energy;
      default:
        return theme.colors.primary;
    }
  };

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'Новичок';
      case 'intermediate':
        return 'Средний';
      case 'advanced':
        return 'Продвинутый';
      default:
        return difficulty;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'sleep':
        return '😴';
      case 'stress':
        return '😌';
      case 'focus':
        return '🎯';
      case 'energy':
        return '⚡';
      default:
        return '💨';
    }
  };

  const filteredPatterns =
    selectedCategory === 'all'
      ? breathingPatterns
      : breathingPatterns.filter((p) => p.category === selectedCategory);

  // Экран активной сессии
  if (selectedPattern && isActive) {
    return (
      <SafeAreaView style={styles.sessionContainer}>
        <StatusBar barStyle="light-content" backgroundColor={theme.colors.primary} />
        <LinearGradient
          colors={theme.colors.gradient.calm}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.sessionGradient}
        >
          <View style={styles.sessionHeader}>
            <Button
              onPress={() => {
                setIsActive(false);
                setSelectedPattern(null);
              }}
              variant="text"
            >
              Завершить
            </Button>
          </View>

          <View style={styles.sessionContent}>
            <Text style={[styles.sessionTitle, { color: theme.colors.onPrimary }]}>
              {selectedPattern.name}
            </Text>

            <BreathingCircle
              phases={selectedPattern.phases}
              isActive={isActive}
              onCycleComplete={() => console.log('Цикл завершен')}
            />

            <View style={styles.sessionInfo}>
              <View style={styles.sessionInfoItem}>
                <Text
                  style={[
                    styles.sessionInfoValue,
                    { color: theme.colors.onPrimary },
                  ]}
                >
                  {selectedPattern.cycles}
                </Text>
                <Text
                  style={[
                    styles.sessionInfoLabel,
                    { color: theme.colors.onPrimary, opacity: 0.8 },
                  ]}
                >
                  Циклов
                </Text>
              </View>
              <View style={styles.sessionInfoItem}>
                <Text
                  style={[
                    styles.sessionInfoValue,
                    { color: theme.colors.onPrimary },
                  ]}
                >
                  {selectedPattern.duration}
                </Text>
                <Text
                  style={[
                    styles.sessionInfoLabel,
                    { color: theme.colors.onPrimary, opacity: 0.8 },
                  ]}
                >
                  Минут
                </Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      </SafeAreaView>
    );
  }

  // Экран детальной информации
  if (selectedPattern && !isActive) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          <View style={styles.detailHeader}>
            <Button
              onPress={() => setSelectedPattern(null)}
              variant="text"
            >
              ← Назад
            </Button>
          </View>

          <View style={styles.detailHero}>
            <LinearGradient
              colors={theme.colors.gradient.primary}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.detailHeroGradient}
            >
              <Text style={styles.detailHeroEmoji}>
                {getCategoryIcon(selectedPattern.category)}
              </Text>
            </LinearGradient>
          </View>

          <View style={styles.detailContent}>
            <View style={styles.detailChips}>
              <Chip
                label={getDifficultyLabel(selectedPattern.difficulty)}
                variant="filled"
                color={getDifficultyColor(selectedPattern.difficulty)}
              />
              <View style={{ width: theme.spacing.sm }} />
              <Chip
                label={`${selectedPattern.duration} мин`}
                variant="outlined"
              />
            </View>

            <Text style={styles.detailTitle}>{selectedPattern.name}</Text>
            <Text style={styles.detailDescription}>
              {selectedPattern.description}
            </Text>

            <View style={styles.detailSection}>
              <Text style={styles.detailSectionTitle}>Ритм дыхания</Text>
              {selectedPattern.phases.map((phase, index) => (
                <View key={index} style={styles.phaseCard}>
                  <View
                    style={[
                      styles.phaseIcon,
                      { backgroundColor: theme.colors.primaryContainer },
                    ]}
                  >
                    <Text style={styles.phaseIconText}>
                      {phase.type === 'inhale' && '↑'}
                      {phase.type === 'exhale' && '↓'}
                      {(phase.type === 'hold' || phase.type === 'hold-empty') &&
                        '–'}
                    </Text>
                  </View>
                  <View style={styles.phaseInfo}>
                    <Text style={styles.phaseLabel}>
                      {phase.type === 'inhale' && 'Вдох'}
                      {phase.type === 'exhale' && 'Выдох'}
                      {phase.type === 'hold' && 'Задержка'}
                      {phase.type === 'hold-empty' && 'Пауза'}
                    </Text>
                    <Text style={styles.phaseDuration}>{phase.duration} сек</Text>
                  </View>
                </View>
              ))}
            </View>

            <View style={styles.detailSection}>
              <Text style={styles.detailSectionTitle}>Преимущества</Text>
              {selectedPattern.benefits.map((benefit, index) => (
                <View key={index} style={styles.benefitItem}>
                  <Text style={styles.benefitIcon}>✓</Text>
                  <Text style={styles.benefitText}>{benefit}</Text>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>

        <View style={styles.detailFooter}>
          <Button
            onPress={() => setIsActive(true)}
            variant="filled"
            size="large"
            fullWidth
          >
            Начать практику
          </Button>
        </View>
      </SafeAreaView>
    );
  }

  // Список техник
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Дыхательные техники</Text>
          <Text style={styles.subtitle}>
            Выберите технику для улучшения самочувствия
          </Text>
        </View>

        <View style={styles.categoriesContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categories}
          >
            {categories.map((category) => (
              <Chip
                key={category.id}
                label={`${category.icon} ${category.label}`}
                onPress={() => setSelectedCategory(category.id)}
                selected={selectedCategory === category.id}
                variant="filled"
                style={styles.categoryChip}
              />
            ))}
          </ScrollView>
        </View>

        <View style={styles.patternsGrid}>
          {filteredPatterns.map((pattern) => (
            <Card
              key={pattern.id}
              variant="elevated"
              elevation="level2"
              onPress={() => setSelectedPattern(pattern)}
              style={styles.patternCard}
            >
              <View
                style={[
                  styles.patternHeader,
                  { backgroundColor: getDifficultyColor(pattern.difficulty) },
                ]}
              >
                <Text style={styles.patternIcon}>
                  {getCategoryIcon(pattern.category)}
                </Text>
              </View>
              <View style={styles.patternContent}>
                <Text style={styles.patternName}>{pattern.name}</Text>
                <Text style={styles.patternMeta}>
                  {pattern.duration} мин • {getDifficultyLabel(pattern.difficulty)}
                </Text>
                <View style={styles.patternBenefits}>
                  <Text style={styles.patternBenefit} numberOfLines={1}>
                    {pattern.benefits[0]}
                  </Text>
                </View>
              </View>
            </Card>
          ))}
        </View>

        <View style={styles.bottomSpacing} />
      </ScrollView>

      <FAB
        icon={<Text style={{ fontSize: 24 }}>▶️</Text>}
        onPress={() => {
          if (filteredPatterns.length > 0) {
            setSelectedPattern(filteredPatterns[0]);
          }
        }}
        extended
        label="Быстрый старт"
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
  scrollView: {
    flex: 1,
  },
  header: {
    padding: lightTheme.screenSpacing.horizontal,
    paddingTop: lightTheme.spacing.md,
  },
  title: {
    ...lightTheme.typography.displaySmall,
    color: lightTheme.colors.onBackground,
    fontWeight: '700',
    marginBottom: lightTheme.spacing.sm,
  },
  subtitle: {
    ...lightTheme.typography.bodyLarge,
    color: lightTheme.colors.onSurfaceVariant,
    lineHeight: 24,
  },
  categoriesContainer: {
    marginBottom: lightTheme.spacing.lg,
  },
  categories: {
    paddingHorizontal: lightTheme.screenSpacing.horizontal,
  },
  categoryChip: {
    marginRight: lightTheme.spacing.sm,
  },
  patternsGrid: {
    paddingHorizontal: lightTheme.screenSpacing.horizontal,
  },
  patternCard: {
    marginBottom: lightTheme.spacing.md,
    overflow: 'hidden',
  },
  patternHeader: {
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  patternIcon: {
    fontSize: 48,
  },
  patternContent: {
    padding: lightTheme.spacing.lg,
  },
  patternName: {
    ...lightTheme.typography.titleLarge,
    color: lightTheme.colors.onSurface,
    fontWeight: '600',
    marginBottom: 4,
  },
  patternMeta: {
    ...lightTheme.typography.bodyMedium,
    color: lightTheme.colors.onSurfaceVariant,
    marginBottom: lightTheme.spacing.sm,
  },
  patternBenefits: {
    flexDirection: 'row',
  },
  patternBenefit: {
    ...lightTheme.typography.bodySmall,
    color: lightTheme.colors.primary,
  },
  fab: {
    position: 'absolute',
    right: lightTheme.spacing.lg,
    bottom: lightTheme.spacing.lg,
  },
  bottomSpacing: {
    height: 100,
  },
  // Detail Screen
  detailHeader: {
    padding: lightTheme.spacing.md,
  },
  detailHero: {
    height: 200,
    marginHorizontal: lightTheme.screenSpacing.horizontal,
    marginBottom: lightTheme.spacing.lg,
    borderRadius: lightTheme.borderRadius.lg,
    overflow: 'hidden',
  },
  detailHeroGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailHeroEmoji: {
    fontSize: 80,
  },
  detailContent: {
    paddingHorizontal: lightTheme.screenSpacing.horizontal,
  },
  detailChips: {
    flexDirection: 'row',
    marginBottom: lightTheme.spacing.md,
  },
  detailTitle: {
    ...lightTheme.typography.headlineLarge,
    color: lightTheme.colors.onBackground,
    fontWeight: '700',
    marginBottom: lightTheme.spacing.sm,
  },
  detailDescription: {
    ...lightTheme.typography.bodyLarge,
    color: lightTheme.colors.onSurfaceVariant,
    lineHeight: 24,
    marginBottom: lightTheme.spacing.xl,
  },
  detailSection: {
    marginBottom: lightTheme.spacing.xl,
  },
  detailSectionTitle: {
    ...lightTheme.typography.titleLarge,
    color: lightTheme.colors.onBackground,
    fontWeight: '600',
    marginBottom: lightTheme.spacing.md,
  },
  phaseCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: lightTheme.spacing.md,
    backgroundColor: lightTheme.colors.surfaceVariant,
    borderRadius: lightTheme.borderRadius.md,
    marginBottom: lightTheme.spacing.sm,
  },
  phaseIcon: {
    width: 40,
    height: 40,
    borderRadius: lightTheme.borderRadius.full,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: lightTheme.spacing.md,
  },
  phaseIconText: {
    fontSize: 20,
    color: lightTheme.colors.primary,
  },
  phaseInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  phaseLabel: {
    ...lightTheme.typography.bodyLarge,
    color: lightTheme.colors.onSurface,
  },
  phaseDuration: {
    ...lightTheme.typography.titleMedium,
    color: lightTheme.colors.primary,
    fontWeight: '600',
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: lightTheme.spacing.sm,
  },
  benefitIcon: {
    fontSize: 20,
    color: lightTheme.colors.stress,
    marginRight: lightTheme.spacing.sm,
  },
  benefitText: {
    ...lightTheme.typography.bodyLarge,
    color: lightTheme.colors.onBackground,
  },
  detailFooter: {
    padding: lightTheme.screenSpacing.horizontal,
    paddingBottom: lightTheme.spacing.lg,
    backgroundColor: lightTheme.colors.surface,
    ...lightTheme.elevation.level2,
  },
  // Session Screen
  sessionContainer: {
    flex: 1,
  },
  sessionGradient: {
    flex: 1,
  },
  sessionHeader: {
    padding: lightTheme.spacing.md,
    alignItems: 'flex-start',
  },
  sessionContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: lightTheme.screenSpacing.horizontal,
  },
  sessionTitle: {
    ...lightTheme.typography.headlineMedium,
    fontWeight: '600',
    marginBottom: lightTheme.spacing.xl,
    textAlign: 'center',
  },
  sessionInfo: {
    flexDirection: 'row',
    marginTop: lightTheme.spacing.xl,
  },
  sessionInfoItem: {
    alignItems: 'center',
    marginHorizontal: lightTheme.spacing.xl,
  },
  sessionInfoValue: {
    ...lightTheme.typography.displaySmall,
    fontWeight: '700',
  },
  sessionInfoLabel: {
    ...lightTheme.typography.bodyMedium,
    marginTop: 4,
  },
});

export default ModernBreathingScreen;
