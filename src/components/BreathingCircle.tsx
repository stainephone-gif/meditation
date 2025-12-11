import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  Easing,
  interpolate,
} from 'react-native-reanimated';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

interface Phase {
  type: 'inhale' | 'hold' | 'exhale' | 'hold-empty';
  duration: number;
}

interface BreathingCircleProps {
  phases: Phase[];
  isActive: boolean;
  onCycleComplete?: () => void;
}

const { width } = Dimensions.get('window');
const CIRCLE_SIZE = width * 0.6;

const BreathingCircle: React.FC<BreathingCircleProps> = ({
  phases,
  isActive,
  onCycleComplete,
}) => {
  const progress = useSharedValue(0);
  const currentPhaseIndex = useSharedValue(0);

  const getPhaseLabel = (type: Phase['type']): string => {
    switch (type) {
      case 'inhale':
        return 'Вдох';
      case 'exhale':
        return 'Выдох';
      case 'hold':
        return 'Задержка';
      case 'hold-empty':
        return 'Пауза';
    }
  };

  const getTotalDuration = () => {
    return phases.reduce((sum, phase) => sum + phase.duration, 0);
  };

  useEffect(() => {
    if (isActive) {
      const totalDuration = getTotalDuration() * 1000; // в миллисекунды

      progress.value = withRepeat(
        withTiming(1, {
          duration: totalDuration,
          easing: Easing.linear,
        }),
        -1, // бесконечное повторение
        false,
        (finished) => {
          if (finished && onCycleComplete) {
            onCycleComplete();
          }
        }
      );

      // Вибрация на смену фазы
      const totalDuration = getTotalDuration();
      let elapsed = 0;

      phases.forEach((phase) => {
        setTimeout(() => {
          if (isActive) {
            ReactNativeHapticFeedback.trigger('impactLight');
          }
        }, elapsed * 1000);
        elapsed += phase.duration;
      });
    } else {
      progress.value = 0;
    }
  }, [isActive, phases]);

  const getCurrentPhase = (progressValue: number): number => {
    const totalDuration = getTotalDuration();
    let elapsed = 0;

    for (let i = 0; i < phases.length; i++) {
      elapsed += phases[i].duration;
      if (progressValue <= elapsed / totalDuration) {
        return i;
      }
    }
    return phases.length - 1;
  };

  const animatedStyle = useAnimatedStyle(() => {
    const phaseIndex = getCurrentPhase(progress.value);
    const phase = phases[phaseIndex];

    // Размер круга зависит от фазы
    let targetScale = 1;
    if (phase.type === 'inhale') {
      targetScale = 1.3; // расширяется на вдохе
    } else if (phase.type === 'exhale') {
      targetScale = 0.7; // сужается на выдохе
    }

    // Плавная интерполяция размера
    const scale = interpolate(
      progress.value,
      [0, 0.25, 0.5, 0.75, 1],
      [1, targetScale, 1, targetScale, 1]
    );

    return {
      transform: [{ scale }],
    };
  });

  const animatedTextStyle = useAnimatedStyle(() => {
    const phaseIndex = getCurrentPhase(progress.value);
    return {
      opacity: withTiming(1, { duration: 300 }),
    };
  });

  const currentPhase = phases[Math.floor(progress.value * phases.length)] || phases[0];

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.circle, animatedStyle]}>
        <View style={styles.innerCircle}>
          <Animated.Text style={[styles.phaseText, animatedTextStyle]}>
            {getPhaseLabel(currentPhase.type)}
          </Animated.Text>
          <Text style={styles.instructionText}>
            {currentPhase.duration}с
          </Text>
        </View>
      </Animated.View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>
          Следуйте за кругом и дышите в ритм
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    backgroundColor: 'rgba(107, 76, 230, 0.2)',
    borderWidth: 3,
    borderColor: '#6B4CE6',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#6B4CE6',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 10,
  },
  innerCircle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  phaseText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#6B4CE6',
    marginBottom: 10,
  },
  instructionText: {
    fontSize: 20,
    color: '#666',
  },
  infoContainer: {
    marginTop: 40,
    paddingHorizontal: 20,
  },
  infoText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
  },
});

export default BreathingCircle;
