export interface BreathingPhase {
  type: 'inhale' | 'hold' | 'exhale' | 'hold-empty';
  duration: number; // секунды
}

export interface BreathingPattern {
  id: string;
  name: string;
  description: string;
  phases: BreathingPhase[];
  cycles: number;
  benefits: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: number; // общая длительность в минутах
  category: 'sleep' | 'stress' | 'focus' | 'energy';
}

export const breathingPatterns: BreathingPattern[] = [
  {
    id: 'breathing-478',
    name: 'Дыхание 4-7-8',
    description: 'Техника для быстрого засыпания и глубокой релаксации. Разработана доктором Эндрю Вейлом.',
    phases: [
      { type: 'inhale', duration: 4 },
      { type: 'hold', duration: 7 },
      { type: 'exhale', duration: 8 },
    ],
    cycles: 4,
    benefits: [
      'Быстрое засыпание',
      'Снижение тревожности',
      'Успокоение нервной системы',
      'Снижение давления',
    ],
    difficulty: 'beginner',
    duration: 5,
    category: 'sleep',
  },
  {
    id: 'breathing-box',
    name: 'Box Breathing (Квадратное дыхание)',
    description: 'Техника используется Navy SEALs для повышения концентрации и снижения стресса в критических ситуациях.',
    phases: [
      { type: 'inhale', duration: 4 },
      { type: 'hold', duration: 4 },
      { type: 'exhale', duration: 4 },
      { type: 'hold-empty', duration: 4 },
    ],
    cycles: 5,
    benefits: [
      'Повышение концентрации',
      'Снижение стресса',
      'Улучшение фокуса',
      'Эмоциональный баланс',
    ],
    difficulty: 'intermediate',
    duration: 5,
    category: 'focus',
  },
  {
    id: 'breathing-relaxing',
    name: 'Расслабляющее дыхание',
    description: 'Простая техника с удлиненным выдохом для активации парасимпатической нервной системы.',
    phases: [
      { type: 'inhale', duration: 4 },
      { type: 'exhale', duration: 6 },
    ],
    cycles: 10,
    benefits: [
      'Быстрое расслабление',
      'Снятие напряжения',
      'Снижение пульса',
      'Уменьшение стресса',
    ],
    difficulty: 'beginner',
    duration: 5,
    category: 'stress',
  },
  {
    id: 'breathing-energizing',
    name: 'Энергизирующее дыхание',
    description: 'Техника для быстрого пробуждения и повышения энергии. Основана на пранаяме.',
    phases: [
      { type: 'inhale', duration: 2 },
      { type: 'hold', duration: 2 },
      { type: 'exhale', duration: 2 },
    ],
    cycles: 10,
    benefits: [
      'Повышение энергии',
      'Бодрость',
      'Улучшение настроения',
      'Ясность ума',
    ],
    difficulty: 'intermediate',
    duration: 3,
    category: 'energy',
  },
  {
    id: 'breathing-coherent',
    name: 'Когерентное дыхание',
    description: 'Оптимальный ритм дыхания для баланса сердечного ритма и нервной системы.',
    phases: [
      { type: 'inhale', duration: 5 },
      { type: 'exhale', duration: 5 },
    ],
    cycles: 10,
    benefits: [
      'Баланс нервной системы',
      'Улучшение вариабельности сердечного ритма',
      'Снижение стресса',
      'Эмоциональная стабильность',
    ],
    difficulty: 'beginner',
    duration: 5,
    category: 'stress',
  },
  {
    id: 'breathing-alternate',
    name: 'Попеременное дыхание',
    description: 'Техника из йоги (Нади Шодхана) для балансировки полушарий мозга.',
    phases: [
      { type: 'inhale', duration: 4 },
      { type: 'hold', duration: 4 },
      { type: 'exhale', duration: 4 },
      { type: 'hold-empty', duration: 4 },
    ],
    cycles: 7,
    benefits: [
      'Балансировка полушарий мозга',
      'Улучшение концентрации',
      'Снятие ментального напряжения',
      'Ясность мышления',
    ],
    difficulty: 'advanced',
    duration: 7,
    category: 'focus',
  },
  {
    id: 'breathing-triangle',
    name: 'Треугольное дыхание',
    description: 'Простая техника с равными фазами вдоха, задержки и выдоха.',
    phases: [
      { type: 'inhale', duration: 3 },
      { type: 'hold', duration: 3 },
      { type: 'exhale', duration: 3 },
    ],
    cycles: 8,
    benefits: [
      'Простота освоения',
      'Успокоение ума',
      'Снижение тревоги',
      'Улучшение сна',
    ],
    difficulty: 'beginner',
    duration: 4,
    category: 'stress',
  },
  {
    id: 'breathing-wim-hof',
    name: 'Дыхание Вим Хофа',
    description: 'Мощная техника для повышения энергии и укрепления иммунной системы.',
    phases: [
      { type: 'inhale', duration: 2 },
      { type: 'exhale', duration: 1 },
    ],
    cycles: 30,
    benefits: [
      'Повышение энергии',
      'Укрепление иммунитета',
      'Снижение воспаления',
      'Ментальная ясность',
    ],
    difficulty: 'advanced',
    duration: 10,
    category: 'energy',
  },
];

export const getPatternById = (id: string): BreathingPattern | undefined => {
  return breathingPatterns.find((pattern) => pattern.id === id);
};

export const getPatternsByCategory = (category: BreathingPattern['category']): BreathingPattern[] => {
  return breathingPatterns.filter((pattern) => pattern.category === category);
};

export const getPatternsByDifficulty = (difficulty: BreathingPattern['difficulty']): BreathingPattern[] => {
  return breathingPatterns.filter((pattern) => pattern.difficulty === difficulty);
};
