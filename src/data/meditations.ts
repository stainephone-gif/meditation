export interface Meditation {
  id: string;
  title: string;
  description: string;
  category: 'stress' | 'sleep' | 'focus' | 'energy' | 'gratitude' | 'body-scan';
  duration: number; // секунды
  audioFile: string; // путь к локальному файлу
  backgroundSound?: string;
  image: string;
  instructor: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  benefits: string[];
  tags: string[];
}

export const meditations: Meditation[] = [
  {
    id: 'meditation-stress-relief',
    title: 'Снятие стресса',
    description: 'Короткая практика для быстрого снятия напряжения и стресса. Идеальна для перерыва в рабочий день.',
    category: 'stress',
    duration: 600, // 10 минут
    audioFile: 'meditations/stress_relief_10min.mp3',
    backgroundSound: 'rain',
    image: 'images/stress_relief.jpg',
    instructor: 'Анна Медитация',
    difficulty: 'beginner',
    benefits: [
      'Снижение уровня стресса',
      'Расслабление мышц',
      'Успокоение ума',
      'Эмоциональный баланс',
    ],
    tags: ['стресс', 'расслабление', 'быстрая'],
  },
  {
    id: 'meditation-deep-sleep',
    title: 'Глубокий сон',
    description: 'Медитация для подготовки ко сну. Помогает отпустить мысли дня и погрузиться в глубокий релаксирующий сон.',
    category: 'sleep',
    duration: 1200, // 20 минут
    audioFile: 'meditations/deep_sleep_20min.mp3',
    backgroundSound: 'ocean',
    image: 'images/deep_sleep.jpg',
    instructor: 'Анна Медитация',
    difficulty: 'beginner',
    benefits: [
      'Быстрое засыпание',
      'Глубокий сон',
      'Отдых от мыслей',
      'Восстановление энергии',
    ],
    tags: ['сон', 'вечер', 'расслабление'],
  },
  {
    id: 'meditation-morning-energy',
    title: 'Утренняя энергия',
    description: 'Бодрящая утренняя практика для заряда энергией и позитивным настроем на весь день.',
    category: 'energy',
    duration: 600, // 10 минут
    audioFile: 'meditations/morning_energy_10min.mp3',
    backgroundSound: 'birds',
    image: 'images/morning_energy.jpg',
    instructor: 'Михаил Осознанность',
    difficulty: 'beginner',
    benefits: [
      'Прилив энергии',
      'Позитивный настрой',
      'Ясность ума',
      'Мотивация',
    ],
    tags: ['утро', 'энергия', 'бодрость'],
  },
  {
    id: 'meditation-focus-concentration',
    title: 'Фокус и концентрация',
    description: 'Практика для улучшения способности концентрироваться и сохранять фокус на задачах.',
    category: 'focus',
    duration: 900, // 15 минут
    audioFile: 'meditations/focus_15min.mp3',
    backgroundSound: 'white_noise',
    image: 'images/focus.jpg',
    instructor: 'Михаил Осознанность',
    difficulty: 'intermediate',
    benefits: [
      'Улучшение концентрации',
      'Ясность мышления',
      'Продуктивность',
      'Ментальная выносливость',
    ],
    tags: ['фокус', 'работа', 'концентрация'],
  },
  {
    id: 'meditation-body-scan',
    title: 'Сканирование тела',
    description: 'Практика осознанного внимания к ощущениям в теле. Помогает снять физическое напряжение.',
    category: 'body-scan',
    duration: 1200, // 20 минут
    audioFile: 'meditations/body_scan_20min.mp3',
    image: 'images/body_scan.jpg',
    instructor: 'Анна Медитация',
    difficulty: 'intermediate',
    benefits: [
      'Снятие мышечного напряжения',
      'Осознание тела',
      'Глубокое расслабление',
      'Связь с телом',
    ],
    tags: ['тело', 'расслабление', 'осознанность'],
  },
  {
    id: 'meditation-gratitude',
    title: 'Благодарность',
    description: 'Практика культивирования чувства благодарности и позитивного отношения к жизни.',
    category: 'gratitude',
    duration: 600, // 10 минут
    audioFile: 'meditations/gratitude_10min.mp3',
    backgroundSound: 'singing_bowls',
    image: 'images/gratitude.jpg',
    instructor: 'Михаил Осознанность',
    difficulty: 'beginner',
    benefits: [
      'Позитивное мышление',
      'Улучшение настроения',
      'Эмоциональное благополучие',
      'Удовлетворенность жизнью',
    ],
    tags: ['благодарность', 'позитив', 'счастье'],
  },
  {
    id: 'meditation-anxiety-release',
    title: 'Освобождение от тревоги',
    description: 'Специальная практика для работы с тревожными мыслями и чувствами.',
    category: 'stress',
    duration: 900, // 15 минут
    audioFile: 'meditations/anxiety_release_15min.mp3',
    backgroundSound: 'forest',
    image: 'images/anxiety_release.jpg',
    instructor: 'Анна Медитация',
    difficulty: 'intermediate',
    benefits: [
      'Снижение тревожности',
      'Эмоциональная стабильность',
      'Принятие чувств',
      'Внутренний покой',
    ],
    tags: ['тревога', 'стресс', 'успокоение'],
  },
  {
    id: 'meditation-loving-kindness',
    title: 'Любящая доброта',
    description: 'Практика Метта - развитие сострадания к себе и другим.',
    category: 'gratitude',
    duration: 900, // 15 минут
    audioFile: 'meditations/loving_kindness_15min.mp3',
    backgroundSound: 'singing_bowls',
    image: 'images/loving_kindness.jpg',
    instructor: 'Михаил Осознанность',
    difficulty: 'intermediate',
    benefits: [
      'Развитие сострадания',
      'Улучшение отношений',
      'Самопринятие',
      'Эмоциональное исцеление',
    ],
    tags: ['любовь', 'доброта', 'сострадание'],
  },
  {
    id: 'meditation-quick-reset',
    title: 'Быстрая перезагрузка',
    description: 'Короткая 5-минутная практика для быстрого восстановления энергии и ясности ума.',
    category: 'energy',
    duration: 300, // 5 минут
    audioFile: 'meditations/quick_reset_5min.mp3',
    image: 'images/quick_reset.jpg',
    instructor: 'Михаил Осознанность',
    difficulty: 'beginner',
    benefits: [
      'Быстрое восстановление',
      'Ментальная ясность',
      'Снятие усталости',
      'Прилив сил',
    ],
    tags: ['быстрая', 'энергия', 'перерыв'],
  },
  {
    id: 'meditation-mindful-breathing',
    title: 'Осознанное дыхание',
    description: 'Базовая практика медитации на дыхании. Основа всех медитативных техник.',
    category: 'focus',
    duration: 600, // 10 минут
    audioFile: 'meditations/mindful_breathing_10min.mp3',
    image: 'images/mindful_breathing.jpg',
    instructor: 'Анна Медитация',
    difficulty: 'beginner',
    benefits: [
      'Развитие внимательности',
      'Успокоение ума',
      'Эмоциональная регуляция',
      'Основа для других практик',
    ],
    tags: ['дыхание', 'основы', 'внимательность'],
  },
];

export const getMeditationById = (id: string): Meditation | undefined => {
  return meditations.find((meditation) => meditation.id === id);
};

export const getMeditationsByCategory = (
  category: Meditation['category']
): Meditation[] => {
  return meditations.filter((meditation) => meditation.category === category);
};

export const getMeditationsByDuration = (
  minDuration: number,
  maxDuration: number
): Meditation[] => {
  return meditations.filter(
    (meditation) =>
      meditation.duration >= minDuration && meditation.duration <= maxDuration
  );
};

export const getMeditationsByDifficulty = (
  difficulty: Meditation['difficulty']
): Meditation[] => {
  return meditations.filter((meditation) => meditation.difficulty === difficulty);
};

export const searchMeditations = (query: string): Meditation[] => {
  const lowerQuery = query.toLowerCase();
  return meditations.filter(
    (meditation) =>
      meditation.title.toLowerCase().includes(lowerQuery) ||
      meditation.description.toLowerCase().includes(lowerQuery) ||
      meditation.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
  );
};
