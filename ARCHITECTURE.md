# 🏗️ Архитектура приложения MindPeace

## Обзор архитектуры

MindPeace построен на основе React Native с использованием современных паттернов и лучших практик мобильной разработки.

## Технологический стек

### Core
- **React Native 0.73** - основной фреймворк
- **TypeScript 5.3** - типизация
- **React 18.2** - UI библиотека

### State Management
- **Redux Toolkit** - управление глобальным состоянием
- **React Redux** - интеграция Redux с React
- Слайсы:
  - `sessionsSlice` - история медитаций
  - `settingsSlice` - настройки пользователя
  - `statsSlice` - статистика и достижения

### Navigation
- **React Navigation 6**
  - Bottom Tabs Navigator - основная навигация
  - Stack Navigator - вложенные экраны
  - Модальные окна для сессий

### Data Persistence
- **AsyncStorage** - локальное хранилище
- Кэширование:
  - Настройки пользователя
  - История сессий
  - Статистика
  - Пользовательские миксы звуков

### Audio Management
- **react-native-track-player** - основной аудиоплеер
  - Фоновое воспроизведение
  - Управление плейлистами
  - Микширование звуков
- **react-native-sound** - дополнительные аудио эффекты

### Animations
- **React Native Reanimated 3**
  - Анимации дыхательного круга
  - Transitions между экранами
  - Интерактивные жесты
- **React Native Gesture Handler** - обработка жестов

### UI Components
- **react-native-svg** - векторная графика
- **react-native-chart-kit** - графики статистики
- Кастомные компоненты

### Device Features
- **react-native-haptic-feedback** - вибрация
- **@react-native-community/push-notification-ios** - уведомления

## Структура данных

### LocalStorage Schema

```typescript
// AsyncStorage ключи
const STORAGE_KEYS = {
  SESSIONS: '@mindpeace:sessions',
  SETTINGS: '@mindpeace:settings',
  STATS: '@mindpeace:stats',
  ACHIEVEMENTS: '@mindpeace:achievements',
  CUSTOM_MIXES: '@mindpeace:custom_mixes',
  ONBOARDING_COMPLETED: '@mindpeace:onboarding',
};

// Структура сессии
interface StoredSession {
  id: string;
  type: 'meditation' | 'breathing' | 'sounds' | 'timer';
  date: string; // ISO 8601
  duration: number; // секунды
  completed: boolean;
  meditationId?: string;
  breathingPatternId?: string;
  soundIds?: string[];
  mood?: 'great' | 'good' | 'okay' | 'stressed' | 'anxious';
  notes?: string;
}

// Настройки
interface StoredSettings {
  darkMode: boolean;
  notificationsEnabled: boolean;
  reminderTime?: string; // HH:mm
  soundVolume: number; // 0-1
  vibrationEnabled: boolean;
  firstTimeUser: boolean;
}

// Статистика
interface StoredStats {
  totalSessions: number;
  totalMinutes: number;
  currentStreak: number;
  longestStreak: number;
  lastSessionDate?: string;
  categoryCounts: Record<string, number>;
}
```

## Паттерны и принципы

### Component Organization

```
components/
├── atoms/           # Базовые компоненты
│   ├── Button.tsx
│   ├── Text.tsx
│   └── Icon.tsx
├── molecules/       # Составные компоненты
│   ├── Card.tsx
│   ├── ListItem.tsx
│   └── Input.tsx
└── organisms/       # Сложные компоненты
    ├── BreathingCircle.tsx
    ├── MeditationPlayer.tsx
    └── SoundMixer.tsx
```

### Custom Hooks

```typescript
// Управление аудио
useAudioPlayer(audioFile: string)
useBackgroundAudio()

// Работа с данными
useSessions()
useStats()
useSettings()

// Таймеры и интервалы
useTimer(duration: number)
useCountdown(initialTime: number)

// Анимации
useBreathingAnimation(pattern: BreathingPattern)
useCircleAnimation()
```

### Redux Store Structure

```typescript
{
  sessions: {
    history: Session[],
    current: Session | null,
    loading: boolean,
    error: string | null
  },
  settings: {
    darkMode: boolean,
    notifications: boolean,
    // ...другие настройки
  },
  stats: {
    totalSessions: number,
    totalMinutes: number,
    streak: number,
    // ...другая статистика
  },
  audio: {
    isPlaying: boolean,
    currentTrack: string | null,
    volume: number,
    activeSounds: string[]
  }
}
```

## Навигация

### Navigation Flow

```
App
└── MainNavigator (BottomTabs)
    ├── Home (Stack)
    │   ├── HomeScreen
    │   └── QuickTechniqueScreen
    ├── Meditations (Stack)
    │   ├── MeditationsListScreen
    │   ├── MeditationDetailScreen
    │   └── MeditationSessionScreen (Modal)
    ├── Breathing (Stack)
    │   ├── BreathingListScreen
    │   ├── BreathingDetailScreen
    │   └── BreathingSessionScreen (Modal)
    ├── Sounds (Stack)
    │   ├── SoundsListScreen
    │   ├── SoundMixerScreen
    │   └── CustomMixScreen
    └── Progress (Stack)
        ├── ProgressOverviewScreen
        ├── CalendarScreen
        ├── StatsScreen
        └── AchievementsScreen
```

## Аудио система

### Audio Architecture

```typescript
// AudioPlayer Singleton
class AudioPlayerService {
  private player: TrackPlayer;
  private activeTracks: Map<string, Sound>;

  async playMeditation(meditationId: string): Promise<void>
  async playBreathingSound(soundId: string): Promise<void>
  async playBackgroundSounds(soundIds: string[]): Promise<void>
  async mixSounds(configs: SoundConfig[]): Promise<void>
  async stopAll(): Promise<void>

  setVolume(trackId: string, volume: number): void
  fadeIn(trackId: string, duration: number): void
  fadeOut(trackId: string, duration: number): void
}

// Использование
const audioPlayer = AudioPlayerService.getInstance();
await audioPlayer.playMeditation('meditation-stress-relief');
```

### Background Audio

```typescript
// Настройка фонового аудио
TrackPlayer.setupPlayer({
  waitForBuffer: true,
  playbackBufferTime: 30,
});

// Capabilities для фонового воспроизведения
TrackPlayer.updateOptions({
  capabilities: [
    Capability.Play,
    Capability.Pause,
    Capability.Stop,
    Capability.SeekTo,
  ],
  compactCapabilities: [
    Capability.Play,
    Capability.Pause,
  ],
});
```

## Анимации

### Breathing Circle Animation

```typescript
// Реализация анимации дыхательного круга
const BreathingAnimation = () => {
  const scale = useSharedValue(1);
  const opacity = useSharedValue(0.3);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: opacity.value,
  }));

  useEffect(() => {
    // Анимация вдоха
    scale.value = withTiming(1.3, { duration: 4000 });
    // Анимация выдоха
    scale.value = withTiming(0.7, { duration: 6000 });
  }, []);

  return <Animated.View style={animatedStyle} />;
};
```

## Уведомления

### Notification System

```typescript
// Настройка локальных уведомлений
class NotificationService {
  async scheduleReminder(time: string): Promise<void> {
    // Напоминание о медитации
    await PushNotification.localNotificationSchedule({
      channelId: 'meditation-reminder',
      title: 'Время для медитации',
      message: 'Уделите несколько минут себе',
      date: new Date(time),
      repeatType: 'day',
    });
  }

  async sendAchievementUnlock(achievement: Achievement): Promise<void> {
    // Уведомление о достижении
    await PushNotification.localNotification({
      channelId: 'achievements',
      title: 'Новое достижение!',
      message: achievement.title,
    });
  }
}
```

## Производительность

### Optimization Strategies

1. **Lazy Loading**
   - Screens загружаются по требованию
   - Audio файлы предзагружаются только для текущей сессии

2. **Memoization**
   - `React.memo` для компонентов
   - `useMemo` для вычислений
   - `useCallback` для функций

3. **Image Optimization**
   - WebP формат для изображений
   - Разные размеры для разных разрешений
   - Lazy loading изображений

4. **Audio Optimization**
   - AAC кодек, 96 kbps
   - Стриминг вместо полной загрузки
   - Пре-кэширование следующего трека

5. **Redux Optimization**
   - Selector мemoization (Reselect)
   - Нормализация данных
   - Batch actions

## Тестирование

### Testing Strategy

```typescript
// Unit Tests - компоненты
describe('BreathingCircle', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(
      <BreathingCircle phases={mockPhases} isActive={true} />
    );
    expect(getByTestId('breathing-circle')).toBeTruthy();
  });
});

// Integration Tests - store
describe('sessionsSlice', () => {
  it('should add new session', () => {
    const newSession = createMockSession();
    const state = sessionsReducer(undefined, addSession(newSession));
    expect(state.history).toHaveLength(1);
  });
});

// E2E Tests - flows
describe('Meditation Flow', () => {
  it('should complete meditation session', async () => {
    await device.launchApp();
    await element(by.id('meditations-tab')).tap();
    await element(by.id('meditation-card-0')).tap();
    await element(by.id('start-button')).tap();
    // ... проверка завершения
  });
});
```

## Безопасность

### Security Measures

1. **Data Protection**
   - Локальное хранение без отправки на сервер
   - Шифрование чувствительных данных
   - Secure storage для настроек

2. **Audio Assets**
   - Встроенные в APK
   - Защита от извлечения (ProGuard)
   - Цифровая подпись APK

3. **Privacy**
   - Никакой аналитики по умолчанию
   - Нет доступа к интернету
   - Локальное хранение всех данных

## Сборка и деплой

### Build Process

```bash
# Development
npm run android          # Запуск dev версии

# Staging
npm run build:staging    # Сборка staging APK

# Production
npm run build:production # Сборка production APK
```

### APK Optimization

```gradle
android {
  buildTypes {
    release {
      minifyEnabled true
      shrinkResources true
      proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
    }
  }

  splits {
    abi {
      enable true
      reset()
      include 'armeabi-v7a', 'arm64-v8a'
    }
  }
}
```

## Мониторинг и логирование

### Logging Strategy

```typescript
// Custom Logger
class Logger {
  static info(message: string, data?: any): void {
    if (__DEV__) {
      console.log(`[INFO] ${message}`, data);
    }
  }

  static error(message: string, error?: Error): void {
    console.error(`[ERROR] ${message}`, error);
    // Сохранение в локальное хранилище для диагностики
    ErrorStorage.saveError({ message, error, timestamp: Date.now() });
  }
}
```

## Roadmap технических улучшений

### Фаза 1 (Текущая)
- ✅ Базовая архитектура
- ✅ Offline-first подход
- ✅ Локальное хранилище

### Фаза 2
- [ ] Code splitting для уменьшения initial bundle
- [ ] Automated testing (Unit + E2E)
- [ ] Performance monitoring

### Фаза 3
- [ ] AI рекомендации (on-device ML)
- [ ] Health data integration
- [ ] Advanced analytics

### Фаза 4
- [ ] Multi-platform (iOS, Web)
- [ ] Sync между устройствами (опционально)
- [ ] Plugin system для расширений

---

Эта архитектура обеспечивает:
- 🚀 Высокую производительность
- 📦 Модульность и масштабируемость
- 🔒 Безопасность и приватность
- 🎨 Отличный UX
- 🛠️ Легкость поддержки
