import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import BreathingCircle from '../components/BreathingCircle';
import { breathingPatterns, BreathingPattern } from '../data/breathingPatterns';

const BreathingScreen: React.FC = () => {
  const [selectedPattern, setSelectedPattern] = useState<BreathingPattern | null>(null);
  const [isActive, setIsActive] = useState(false);
  const [completedCycles, setCompletedCycles] = useState(0);

  const handlePatternSelect = (pattern: BreathingPattern) => {
    setSelectedPattern(pattern);
    setIsActive(false);
    setCompletedCycles(0);
  };

  const handleStartStop = () => {
    if (isActive) {
      setIsActive(false);
      setCompletedCycles(0);
    } else {
      setIsActive(true);
    }
  };

  const handleCycleComplete = () => {
    setCompletedCycles((prev) => {
      const newCount = prev + 1;
      if (selectedPattern && newCount >= selectedPattern.cycles) {
        setIsActive(false);
        // Можно добавить уведомление о завершении
        return 0;
      }
      return newCount;
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'sleep':
        return '#6B4CE6';
      case 'stress':
        return '#4ECDC4';
      case 'focus':
        return '#ED64A6';
      case 'energy':
        return '#F6AD55';
      default:
        return '#9F7AEA';
    }
  };

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'Начинающий';
      case 'intermediate':
        return 'Средний';
      case 'advanced':
        return 'Продвинутый';
      default:
        return difficulty;
    }
  };

  if (selectedPattern && isActive) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.sessionContainer}>
          <Text style={styles.sessionTitle}>{selectedPattern.name}</Text>

          <BreathingCircle
            phases={selectedPattern.phases}
            isActive={isActive}
            onCycleComplete={handleCycleComplete}
          />

          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>
                {completedCycles}/{selectedPattern.cycles}
              </Text>
              <Text style={styles.statLabel}>Циклов</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{selectedPattern.duration}m</Text>
              <Text style={styles.statLabel}>Минут</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.stopButton} onPress={handleStartStop}>
            <Text style={styles.stopButtonText}>Остановить</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  if (selectedPattern && !isActive) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <ScrollView style={styles.scrollView}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => setSelectedPattern(null)}
          >
            <Text style={styles.backButtonText}>← Назад</Text>
          </TouchableOpacity>

          <View style={styles.detailContainer}>
            <View
              style={[
                styles.categoryBadge,
                { backgroundColor: getCategoryColor(selectedPattern.category) },
              ]}
            >
              <Text style={styles.categoryText}>
                {selectedPattern.category === 'sleep' && '😴 Сон'}
                {selectedPattern.category === 'stress' && '😌 Стресс'}
                {selectedPattern.category === 'focus' && '🎯 Фокус'}
                {selectedPattern.category === 'energy' && '⚡ Энергия'}
              </Text>
            </View>

            <Text style={styles.detailTitle}>{selectedPattern.name}</Text>
            <Text style={styles.detailDescription}>
              {selectedPattern.description}
            </Text>

            <View style={styles.infoRow}>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Длительность</Text>
                <Text style={styles.infoValue}>{selectedPattern.duration} мин</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Уровень</Text>
                <Text style={styles.infoValue}>
                  {getDifficultyLabel(selectedPattern.difficulty)}
                </Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Циклов</Text>
                <Text style={styles.infoValue}>{selectedPattern.cycles}</Text>
              </View>
            </View>

            <View style={styles.phasesContainer}>
              <Text style={styles.sectionTitle}>Ритм дыхания</Text>
              {selectedPattern.phases.map((phase, index) => (
                <View key={index} style={styles.phaseItem}>
                  <View style={styles.phaseIconContainer}>
                    {phase.type === 'inhale' && <Text style={styles.phaseIcon}>↑</Text>}
                    {phase.type === 'exhale' && <Text style={styles.phaseIcon}>↓</Text>}
                    {(phase.type === 'hold' || phase.type === 'hold-empty') && (
                      <Text style={styles.phaseIcon}>–</Text>
                    )}
                  </View>
                  <Text style={styles.phaseText}>
                    {phase.type === 'inhale' && 'Вдох'}
                    {phase.type === 'exhale' && 'Выдох'}
                    {phase.type === 'hold' && 'Задержка'}
                    {phase.type === 'hold-empty' && 'Пауза'}
                  </Text>
                  <Text style={styles.phaseDuration}>{phase.duration}с</Text>
                </View>
              ))}
            </View>

            <View style={styles.benefitsContainer}>
              <Text style={styles.sectionTitle}>Преимущества</Text>
              {selectedPattern.benefits.map((benefit, index) => (
                <View key={index} style={styles.benefitItem}>
                  <Text style={styles.benefitIcon}>✓</Text>
                  <Text style={styles.benefitText}>{benefit}</Text>
                </View>
              ))}
            </View>

            <TouchableOpacity style={styles.startButton} onPress={handleStartStop}>
              <Text style={styles.startButtonText}>Начать практику</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.title}>Дыхательные техники</Text>
          <Text style={styles.subtitle}>
            Выберите технику для снятия стресса и улучшения самочувствия
          </Text>
        </View>

        <View style={styles.patternsGrid}>
          {breathingPatterns.map((pattern) => (
            <TouchableOpacity
              key={pattern.id}
              style={[
                styles.patternCard,
                { borderColor: getCategoryColor(pattern.category) },
              ]}
              onPress={() => handlePatternSelect(pattern)}
            >
              <View
                style={[
                  styles.patternBadge,
                  { backgroundColor: getCategoryColor(pattern.category) },
                ]}
              >
                <Text style={styles.patternBadgeText}>
                  {pattern.category === 'sleep' && '😴'}
                  {pattern.category === 'stress' && '😌'}
                  {pattern.category === 'focus' && '🎯'}
                  {pattern.category === 'energy' && '⚡'}
                </Text>
              </View>
              <Text style={styles.patternName}>{pattern.name}</Text>
              <Text style={styles.patternDuration}>{pattern.duration} минут</Text>
              <View style={styles.patternDifficulty}>
                <Text style={styles.patternDifficultyText}>
                  {getDifficultyLabel(pattern.difficulty)}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FC',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: 20,
    paddingTop: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2D3748',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#718096',
    lineHeight: 24,
  },
  patternsGrid: {
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  patternCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  patternBadge: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  patternBadgeText: {
    fontSize: 24,
  },
  patternName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2D3748',
    marginBottom: 4,
  },
  patternDuration: {
    fontSize: 14,
    color: '#718096',
    marginBottom: 8,
  },
  patternDifficulty: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: '#EDF2F7',
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  patternDifficultyText: {
    fontSize: 12,
    color: '#4A5568',
  },
  backButton: {
    padding: 20,
    paddingBottom: 10,
  },
  backButtonText: {
    fontSize: 16,
    color: '#6B4CE6',
    fontWeight: '600',
  },
  detailContainer: {
    padding: 20,
    paddingTop: 0,
  },
  categoryBadge: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginBottom: 16,
  },
  categoryText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  detailTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2D3748',
    marginBottom: 12,
  },
  detailDescription: {
    fontSize: 16,
    color: '#718096',
    lineHeight: 24,
    marginBottom: 24,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  infoItem: {
    flex: 1,
    alignItems: 'center',
  },
  infoLabel: {
    fontSize: 12,
    color: '#A0AEC0',
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D3748',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2D3748',
    marginBottom: 16,
  },
  phasesContainer: {
    marginBottom: 32,
  },
  phaseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 8,
  },
  phaseIconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#EDF2F7',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  phaseIcon: {
    fontSize: 18,
    color: '#6B4CE6',
  },
  phaseText: {
    flex: 1,
    fontSize: 16,
    color: '#2D3748',
  },
  phaseDuration: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6B4CE6',
  },
  benefitsContainer: {
    marginBottom: 32,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  benefitIcon: {
    fontSize: 18,
    color: '#48BB78',
    marginRight: 12,
  },
  benefitText: {
    fontSize: 16,
    color: '#2D3748',
  },
  startButton: {
    backgroundColor: '#6B4CE6',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 32,
  },
  startButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  sessionContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  sessionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2D3748',
    textAlign: 'center',
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  statItem: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  statValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#6B4CE6',
  },
  statLabel: {
    fontSize: 14,
    color: '#718096',
    marginTop: 4,
  },
  stopButton: {
    backgroundColor: '#FC8181',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  stopButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BreathingScreen;
