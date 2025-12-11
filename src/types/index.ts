// Общие типы для всего приложения

export interface Session {
  id: string;
  type: 'meditation' | 'breathing' | 'sounds' | 'timer';
  date: string;
  duration: number; // секунды
  completed: boolean;
  meditationId?: string;
  breathingPatternId?: string;
  soundIds?: string[];
  mood?: 'great' | 'good' | 'okay' | 'stressed' | 'anxious';
  notes?: string;
}

export interface UserSettings {
  darkMode: boolean;
  notificationsEnabled: boolean;
  reminderTime?: string; // HH:mm формат
  soundVolume: number; // 0-1
  vibrationEnabled: boolean;
  firstTimeUser: boolean;
  completedOnboarding: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedDate?: string;
  requirement: number; // зависит от типа
  progress: number; // текущий прогресс
  type: 'sessions' | 'streak' | 'total_time' | 'category' | 'special';
}

export interface UserStats {
  totalSessions: number;
  totalMinutes: number;
  currentStreak: number;
  longestStreak: number;
  favoritePractice?: string;
  sessionsThisWeek: number;
  sessionsThisMonth: number;
  averageSessionDuration: number;
  categoryCounts: {
    meditation: number;
    breathing: number;
    sounds: number;
    timer: number;
  };
}

export interface QuickTechnique {
  id: string;
  title: string;
  description: string;
  steps: string[];
  duration: number; // секунды
  icon: string;
  category: 'sos' | 'grounding' | 'relaxation' | 'focus';
}
