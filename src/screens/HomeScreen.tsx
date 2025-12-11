import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { lightTheme } from '../theme';
import Card from '../components/ui/Card';
import Chip from '../components/ui/Chip';
import Button from '../components/ui/Button';

const { width } = Dimensions.get('window');

/**
 * Главный экран приложения
 * Современный дизайн в стиле Material Design 3
 */
const HomeScreen: React.FC = () => {
  const theme = lightTheme;

  const renderHeroSection = () => (
    <View style={styles.heroContainer}>
      <LinearGradient
        colors={theme.colors.gradient.calm}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.heroGradient}
      >
        <View style={styles.heroContent}>
          <Text style={[styles.greeting, { color: theme.colors.onPrimary }]}>
            Доброе утро! 🌅
          </Text>
          <Text
            style={[styles.heroTitle, { color: theme.colors.onPrimary }]}
          >
            Готовы к медитации?
          </Text>
          <Text
            style={[
              styles.heroSubtitle,
              { color: theme.colors.onPrimary, opacity: 0.9 },
            ]}
          >
            Серия: 7 дней • Всего сеансов: 42
          </Text>
        </View>
      </LinearGradient>
    </View>
  );

  const renderQuickActions = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Быстрый старт</Text>
      <View style={styles.quickActionsGrid}>
        <Card
          variant="filled"
          onPress={() => console.log('Дыхание')}
          style={styles.quickActionCard}
        >
          <View style={styles.quickActionContent}>
            <View
              style={[
                styles.quickActionIcon,
                { backgroundColor: theme.colors.secondaryContainer },
              ]}
            >
              <Text style={styles.quickActionEmoji}>💨</Text>
            </View>
            <Text style={styles.quickActionTitle}>Дыхание</Text>
            <Text style={styles.quickActionSubtitle}>5 мин</Text>
          </View>
        </Card>

        <Card
          variant="filled"
          onPress={() => console.log('Медитация')}
          style={styles.quickActionCard}
        >
          <View style={styles.quickActionContent}>
            <View
              style={[
                styles.quickActionIcon,
                { backgroundColor: theme.colors.primaryContainer },
              ]}
            >
              <Text style={styles.quickActionEmoji}>🧘</Text>
            </View>
            <Text style={styles.quickActionTitle}>Медитация</Text>
            <Text style={styles.quickActionSubtitle}>10 мин</Text>
          </View>
        </Card>

        <Card
          variant="filled"
          onPress={() => console.log('Звуки')}
          style={styles.quickActionCard}
        >
          <View style={styles.quickActionContent}>
            <View
              style={[
                styles.quickActionIcon,
                { backgroundColor: theme.colors.tertiaryContainer },
              ]}
            >
              <Text style={styles.quickActionEmoji}>🌊</Text>
            </View>
            <Text style={styles.quickActionTitle}>Звуки</Text>
            <Text style={styles.quickActionSubtitle}>Релакс</Text>
          </View>
        </Card>

        <Card
          variant="filled"
          onPress={() => console.log('SOS')}
          style={styles.quickActionCard}
        >
          <View style={styles.quickActionContent}>
            <View
              style={[
                styles.quickActionIcon,
                { backgroundColor: theme.colors.errorContainer },
              ]}
            >
              <Text style={styles.quickActionEmoji}>🆘</Text>
            </View>
            <Text style={styles.quickActionTitle}>SOS</Text>
            <Text style={styles.quickActionSubtitle}>Срочно</Text>
          </View>
        </Card>
      </View>
    </View>
  );

  const renderRecommendations = () => (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Рекомендации</Text>
        <Text style={styles.sectionLink}>Все</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalScroll}
      >
        <Card
          variant="elevated"
          elevation="level3"
          onPress={() => console.log('Снятие стресса')}
          style={styles.recommendationCard}
        >
          <View style={styles.recommendationImage}>
            <LinearGradient
              colors={theme.colors.gradient.secondary}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.recommendationGradient}
            >
              <Text style={styles.recommendationEmoji}>😌</Text>
            </LinearGradient>
          </View>
          <View style={styles.recommendationContent}>
            <Chip
              label="СТРЕСС"
              variant="filled"
              color={theme.colors.stress}
              style={styles.recommendationChip}
            />
            <Text style={styles.recommendationTitle}>
              Снятие стресса
            </Text>
            <Text style={styles.recommendationDuration}>10 мин</Text>
          </View>
        </Card>

        <Card
          variant="elevated"
          elevation="level3"
          onPress={() => console.log('Глубокий сон')}
          style={styles.recommendationCard}
        >
          <View style={styles.recommendationImage}>
            <LinearGradient
              colors={theme.colors.gradient.primary}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.recommendationGradient}
            >
              <Text style={styles.recommendationEmoji}>😴</Text>
            </LinearGradient>
          </View>
          <View style={styles.recommendationContent}>
            <Chip
              label="СОН"
              variant="filled"
              color={theme.colors.sleep}
              style={styles.recommendationChip}
            />
            <Text style={styles.recommendationTitle}>Глубокий сон</Text>
            <Text style={styles.recommendationDuration}>20 мин</Text>
          </View>
        </Card>

        <Card
          variant="elevated"
          elevation="level3"
          onPress={() => console.log('Фокус')}
          style={styles.recommendationCard}
        >
          <View style={styles.recommendationImage}>
            <LinearGradient
              colors={theme.colors.gradient.tertiary}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.recommendationGradient}
            >
              <Text style={styles.recommendationEmoji}>🎯</Text>
            </LinearGradient>
          </View>
          <View style={styles.recommendationContent}>
            <Chip
              label="ФОКУС"
              variant="filled"
              color={theme.colors.focus}
              style={styles.recommendationChip}
            />
            <Text style={styles.recommendationTitle}>
              Концентрация
            </Text>
            <Text style={styles.recommendationDuration}>15 мин</Text>
          </View>
        </Card>
      </ScrollView>
    </View>
  );

  const renderDailyGoal = () => (
    <View style={styles.section}>
      <Card variant="elevated" style={styles.dailyGoalCard}>
        <View style={styles.dailyGoalContent}>
          <View style={styles.dailyGoalText}>
            <Text style={styles.dailyGoalTitle}>Цель на сегодня</Text>
            <Text style={styles.dailyGoalSubtitle}>
              10 минут медитации
            </Text>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: '60%' }]} />
            </View>
            <Text style={styles.progressText}>6 из 10 минут</Text>
          </View>
          <View style={styles.dailyGoalIcon}>
            <Text style={styles.dailyGoalEmoji}>🎯</Text>
          </View>
        </View>
      </Card>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.gradient.calm[0]}
      />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {renderHeroSection()}
        {renderQuickActions()}
        {renderRecommendations()}
        {renderDailyGoal()}

        <View style={styles.bottomSpacing} />
      </ScrollView>
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
  heroContainer: {
    marginBottom: lightTheme.spacing.lg,
  },
  heroGradient: {
    paddingHorizontal: lightTheme.screenSpacing.horizontal,
    paddingVertical: lightTheme.spacing.xxl,
    borderBottomLeftRadius: lightTheme.borderRadius.xxl,
    borderBottomRightRadius: lightTheme.borderRadius.xxl,
  },
  heroContent: {},
  greeting: {
    ...lightTheme.typography.titleMedium,
    marginBottom: lightTheme.spacing.xs,
  },
  heroTitle: {
    ...lightTheme.typography.displaySmall,
    fontWeight: '700',
    marginBottom: lightTheme.spacing.sm,
  },
  heroSubtitle: {
    ...lightTheme.typography.bodyLarge,
  },
  section: {
    marginBottom: lightTheme.spacing.xl,
    paddingHorizontal: lightTheme.screenSpacing.horizontal,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: lightTheme.spacing.md,
  },
  sectionTitle: {
    ...lightTheme.typography.headlineSmall,
    color: lightTheme.colors.onBackground,
    fontWeight: '700',
  },
  sectionLink: {
    ...lightTheme.typography.labelLarge,
    color: lightTheme.colors.primary,
    fontWeight: '600',
  },
  quickActionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -lightTheme.spacing.xs,
  },
  quickActionCard: {
    width: (width - lightTheme.screenSpacing.horizontal * 2 - lightTheme.spacing.xs * 2) / 2,
    margin: lightTheme.spacing.xs,
  },
  quickActionContent: {
    padding: lightTheme.spacing.md,
    alignItems: 'center',
  },
  quickActionIcon: {
    width: 64,
    height: 64,
    borderRadius: lightTheme.borderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: lightTheme.spacing.sm,
  },
  quickActionEmoji: {
    fontSize: 32,
  },
  quickActionTitle: {
    ...lightTheme.typography.titleMedium,
    color: lightTheme.colors.onSurface,
    fontWeight: '600',
    marginBottom: 4,
  },
  quickActionSubtitle: {
    ...lightTheme.typography.bodySmall,
    color: lightTheme.colors.onSurfaceVariant,
  },
  horizontalScroll: {
    paddingRight: lightTheme.screenSpacing.horizontal,
  },
  recommendationCard: {
    width: width * 0.6,
    marginRight: lightTheme.spacing.md,
  },
  recommendationImage: {
    height: 140,
    overflow: 'hidden',
  },
  recommendationGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  recommendationEmoji: {
    fontSize: 48,
  },
  recommendationContent: {
    padding: lightTheme.spacing.md,
  },
  recommendationChip: {
    alignSelf: 'flex-start',
    marginBottom: lightTheme.spacing.sm,
  },
  recommendationTitle: {
    ...lightTheme.typography.titleLarge,
    color: lightTheme.colors.onSurface,
    fontWeight: '600',
    marginBottom: 4,
  },
  recommendationDuration: {
    ...lightTheme.typography.bodyMedium,
    color: lightTheme.colors.onSurfaceVariant,
  },
  dailyGoalCard: {
    padding: lightTheme.spacing.lg,
  },
  dailyGoalContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dailyGoalText: {
    flex: 1,
  },
  dailyGoalTitle: {
    ...lightTheme.typography.titleLarge,
    color: lightTheme.colors.onSurface,
    fontWeight: '600',
    marginBottom: 4,
  },
  dailyGoalSubtitle: {
    ...lightTheme.typography.bodyMedium,
    color: lightTheme.colors.onSurfaceVariant,
    marginBottom: lightTheme.spacing.md,
  },
  progressBar: {
    height: 8,
    backgroundColor: lightTheme.colors.surfaceVariant,
    borderRadius: lightTheme.borderRadius.full,
    overflow: 'hidden',
    marginBottom: lightTheme.spacing.xs,
  },
  progressFill: {
    height: '100%',
    backgroundColor: lightTheme.colors.primary,
    borderRadius: lightTheme.borderRadius.full,
  },
  progressText: {
    ...lightTheme.typography.bodySmall,
    color: lightTheme.colors.onSurfaceVariant,
  },
  dailyGoalIcon: {
    marginLeft: lightTheme.spacing.md,
  },
  dailyGoalEmoji: {
    fontSize: 48,
  },
  bottomSpacing: {
    height: lightTheme.spacing.xxl,
  },
});

export default HomeScreen;
