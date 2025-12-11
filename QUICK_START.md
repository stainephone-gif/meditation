# 🚀 Быстрый старт MindPeace

## ✅ Проект готов!

Ваш проект **MindPeace** был успешно создан с использованием Expo!

```
📁 /home/user/MindPeace/
├── android/         ← Создается через expo prebuild
├── src/            ← Ваш код (дизайн-система, компоненты)
├── App.tsx         ← Главный файл приложения
├── package.json    ← Зависимости
└── *.md            ← Документация
```

---

## 🎯 Выберите ваш путь

### 🟢 Путь 1: Expo (Рекомендуется для начинающих)

**Преимущества:**
- ✅ Не нужен Android Studio для разработки
- ✅ Быстрая настройка
- ✅ Сборка APK через облако (EAS Build)
- ✅ Тестирование через Expo Go

**Шаги:**
```bash
# 1. Перейдите в проект
cd /home/user/MindPeace

# 2. Установите зависимости
npm install

# 3. Запустите приложение
npx expo start

# 4. Для сборки APK
eas build --platform android --profile preview
```

📖 **Подробная инструкция:** `EXPO_BUILD_GUIDE.md`

---

### 🔵 Путь 2: Bare React Native (Для опытных)

**Преимущества:**
- ✅ Полный контроль над нативным кодом
- ✅ Локальная сборка APK
- ✅ Неограниченное количество сборок

**Шаги:**
```bash
# 1. Создайте папку android/ через prebuild
cd /home/user/MindPeace
npx expo prebuild --platform android

# 2. Соберите APK через Gradle
cd android
./gradlew assembleRelease

# APK будет в: android/app/build/outputs/apk/release/
```

📖 **Подробная инструкция:** `BUILD_GUIDE.md`

---

## 📱 Как получить папку android/

Выполните одну команду:

```bash
cd /home/user/MindPeace
npx expo prebuild --platform android
```

Это создаст:
- ✅ Папку `android/` с нативным кодом
- ✅ Все необходимые Gradle файлы
- ✅ Настройки для сборки APK

**После этого** вы можете:
1. Открыть проект в Android Studio: `File > Open > /home/user/MindPeace/android`
2. Собрать APK через Gradle
3. Следовать инструкциям из `BUILD_GUIDE.md`

---

## 🎨 Что уже готово

### ✅ Дизайн-система
- Material Design 3
- Цвета, типографика, spacing
- Светлая и темная темы
- Градиенты для категорий

### ✅ UI Компоненты
- Button (3 варианта)
- Card (3 варианта)
- Chip (фильтры, категории)
- FAB (Floating Action Button)

### ✅ Экраны
- HomeScreen (главный экран с градиентами)
- ModernBreathingScreen (дыхательные техники)
- AppNavigator (Bottom Navigation)

### ✅ Данные
- 10 медитаций
- 8 дыхательных техник
- 15 звуков природы
- 8 быстрых техник (SOS)

---

## 🔥 Быстрые команды

```bash
# Разработка
cd /home/user/MindPeace
npx expo start

# Создать папку android/
npx expo prebuild --platform android

# Локальная сборка APK (после prebuild)
cd android && ./gradlew assembleRelease

# Облачная сборка APK (проще)
eas build --platform android --profile preview

# Установка на устройство
adb install app-release.apk

# Запуск в Android Studio
# File > Open > /home/user/MindPeace/android
```

---

## 📚 Документация

| Файл | Описание |
|------|----------|
| `CONCEPT.md` | Полная концепция приложения |
| `ARCHITECTURE.md` | Техническая архитектура |
| `DESIGN.md` | Дизайн-система Material Design 3 |
| `USAGE_EXAMPLES.md` | Примеры использования UI компонентов |
| `BUILD_GUIDE.md` | Сборка APK через Android Studio |
| `EXPO_BUILD_GUIDE.md` | Сборка APK через Expo |
| `SETUP_PROJECT.md` | Настройка проекта |

---

## ⚡ Рекомендуемый процесс

### 1. Разработка (Сейчас)
```bash
cd /home/user/MindPeace
npm install
npx expo start
```

Сканируйте QR код в Expo Go на телефоне.

### 2. Первая сборка APK (Когда готовы)

**Вариант А: EAS Build (проще)**
```bash
eas login
eas build:configure
eas build --platform android --profile preview
```

**Вариант Б: Локальная сборка**
```bash
npx expo prebuild --platform android
cd android
./gradlew assembleRelease
```

### 3. Тестирование
```bash
# Найдите APK
ls -la android/app/build/outputs/apk/release/

# Установите на устройство
adb install -r app-release.apk
```

### 4. Публикация в Google Play
```bash
# Соберите AAB
eas build --platform android --profile production

# Или через Gradle
cd android
./gradlew bundleRelease
```

---

## 🎯 Следующие шаги

### Шаг 1: Проверьте что все работает
```bash
cd /home/user/MindPeace
npm install
npx expo start
```

### Шаг 2: Создайте папку android/ (если нужно)
```bash
npx expo prebuild --platform android
```

### Шаг 3: Откройте в Android Studio
```
File > Open > /home/user/MindPeace/android
```

### Шаг 4: Соберите APK
Следуйте инструкциям:
- **Expo**: `EXPO_BUILD_GUIDE.md`
- **Android Studio**: `BUILD_GUIDE.md`

---

## 🆘 Нужна помощь?

### Нет папки android/?
```bash
cd /home/user/MindPeace
npx expo prebuild --platform android
```

### Ошибка при установке зависимостей?
```bash
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### Android SDK не найден?
1. Установите Android Studio
2. Откройте SDK Manager
3. Установите API 33
4. Настройте ANDROID_HOME (см. BUILD_GUIDE.md)

---

## 📁 Текущая структура

```
/home/user/
├── meditation/           ← Исходные файлы (концепция)
└── MindPeace/           ← Рабочий проект
    ├── android/         ← После prebuild
    ├── src/
    │   ├── components/
    │   │   └── ui/      ← Button, Card, Chip, FAB
    │   ├── screens/     ← HomeScreen, BreathingScreen
    │   ├── theme/       ← Дизайн-система
    │   ├── data/        ← Медитации, техники, звуки
    │   └── navigation/  ← AppNavigator
    ├── App.tsx
    └── *.md             ← Вся документация
```

---

**🎉 Готово! Начинайте разработку или сразу собирайте APK!**

```bash
cd /home/user/MindPeace
npx expo start
```
