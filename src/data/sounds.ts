export interface Sound {
  id: string;
  name: string;
  description: string;
  audioFile: string;
  icon: string;
  category: 'nature' | 'ambient' | 'binaural' | 'instruments';
  benefits: string[];
  color: string; // для UI
}

export const sounds: Sound[] = [
  {
    id: 'sound-rain-gentle',
    name: 'Легкий дождь',
    description: 'Мягкий звук дождя для расслабления и концентрации',
    audioFile: 'sounds/rain_gentle.mp3',
    icon: '🌧️',
    category: 'nature',
    benefits: ['Расслабление', 'Концентрация', 'Сон'],
    color: '#5A7FA0',
  },
  {
    id: 'sound-rain-thunderstorm',
    name: 'Гроза',
    description: 'Звуки грозы с громом и сильным дождем',
    audioFile: 'sounds/rain_thunderstorm.mp3',
    icon: '⛈️',
    category: 'nature',
    benefits: ['Глубокое расслабление', 'Маскировка шума', 'Сон'],
    color: '#3D5A7A',
  },
  {
    id: 'sound-ocean-waves',
    name: 'Океанские волны',
    description: 'Ритмичный звук волн, набегающих на берег',
    audioFile: 'sounds/ocean_waves.mp3',
    icon: '🌊',
    category: 'nature',
    benefits: ['Медитация', 'Снятие стресса', 'Ритмичность'],
    color: '#4A9ECC',
  },
  {
    id: 'sound-forest',
    name: 'Лес',
    description: 'Пение птиц и шелест листьев в лесу',
    audioFile: 'sounds/forest.mp3',
    icon: '🌲',
    category: 'nature',
    benefits: ['Связь с природой', 'Бодрость', 'Свежесть'],
    color: '#5A8F5A',
  },
  {
    id: 'sound-campfire',
    name: 'Костер',
    description: 'Треск горящего костра',
    audioFile: 'sounds/campfire.mp3',
    icon: '🔥',
    category: 'nature',
    benefits: ['Уют', 'Расслабление', 'Тепло'],
    color: '#D97236',
  },
  {
    id: 'sound-stream',
    name: 'Ручей',
    description: 'Журчание лесного ручья',
    audioFile: 'sounds/stream.mp3',
    icon: '💧',
    category: 'nature',
    benefits: ['Умиротворение', 'Ясность ума', 'Свежесть'],
    color: '#6BB6D6',
  },
  {
    id: 'sound-wind',
    name: 'Ветер',
    description: 'Мягкий звук ветра в поле',
    audioFile: 'sounds/wind.mp3',
    icon: '💨',
    category: 'nature',
    benefits: ['Простор', 'Свобода', 'Расслабление'],
    color: '#A0C4D9',
  },
  {
    id: 'sound-white-noise',
    name: 'Белый шум',
    description: 'Равномерный белый шум для концентрации',
    audioFile: 'sounds/white_noise.mp3',
    icon: '📻',
    category: 'ambient',
    benefits: ['Концентрация', 'Маскировка шума', 'Фокус'],
    color: '#9E9E9E',
  },
  {
    id: 'sound-pink-noise',
    name: 'Розовый шум',
    description: 'Более мягкий розовый шум для сна',
    audioFile: 'sounds/pink_noise.mp3',
    icon: '🎵',
    category: 'ambient',
    benefits: ['Глубокий сон', 'Расслабление', 'Баланс'],
    color: '#E991A7',
  },
  {
    id: 'sound-singing-bowls',
    name: 'Поющие чаши',
    description: 'Медитативные звуки тибетских поющих чаш',
    audioFile: 'sounds/singing_bowls.mp3',
    icon: '🎶',
    category: 'instruments',
    benefits: ['Глубокая медитация', 'Духовность', 'Исцеление'],
    color: '#D4AF37',
  },
  {
    id: 'sound-tibetan-bells',
    name: 'Тибетские колокольчики',
    description: 'Мягкие звуки тибетских колокольчиков',
    audioFile: 'sounds/tibetan_bells.mp3',
    icon: '🔔',
    category: 'instruments',
    benefits: ['Медитация', 'Очищение', 'Фокус'],
    color: '#B8860B',
  },
  {
    id: 'sound-binaural-theta',
    name: 'Бинауральные ритмы (Тета)',
    description: 'Бинауральные ритмы тета-диапазона для глубокой релаксации',
    audioFile: 'sounds/binaural_theta.mp3',
    icon: '🧠',
    category: 'binaural',
    benefits: ['Глубокая медитация', 'Творчество', 'Интуиция'],
    color: '#9B59B6',
  },
  {
    id: 'sound-binaural-alpha',
    name: 'Бинауральные ритмы (Альфа)',
    description: 'Бинауральные ритмы альфа-диапазона для расслабления',
    audioFile: 'sounds/binaural_alpha.mp3',
    icon: '🧘',
    category: 'binaural',
    benefits: ['Расслабление', 'Снятие стресса', 'Баланс'],
    color: '#8E44AD',
  },
  {
    id: 'sound-binaural-beta',
    name: 'Бинауральные ритмы (Бета)',
    description: 'Бинауральные ритмы бета-диапазона для концентрации',
    audioFile: 'sounds/binaural_beta.mp3',
    icon: '💡',
    category: 'binaural',
    benefits: ['Концентрация', 'Продуктивность', 'Фокус'],
    color: '#7D3C98',
  },
  {
    id: 'sound-cave-ambience',
    name: 'Пещерная атмосфера',
    description: 'Глубокий резонирующий звук пещеры с каплями воды',
    audioFile: 'sounds/cave_ambience.mp3',
    icon: '🕳️',
    category: 'ambient',
    benefits: ['Глубокая медитация', 'Интроспекция', 'Покой'],
    color: '#5D4E37',
  },
];

export interface SoundMix {
  id: string;
  name: string;
  sounds: {
    soundId: string;
    volume: number; // 0-1
  }[];
}

export const getSoundById = (id: string): Sound | undefined => {
  return sounds.find((sound) => sound.id === id);
};

export const getSoundsByCategory = (category: Sound['category']): Sound[] => {
  return sounds.filter((sound) => sound.category === category);
};

export const createSoundMix = (
  name: string,
  soundConfigs: { soundId: string; volume: number }[]
): SoundMix => {
  return {
    id: `mix-${Date.now()}`,
    name,
    sounds: soundConfigs,
  };
};
