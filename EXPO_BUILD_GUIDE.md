# 📱 Сборка APK в Expo

## ✨ Преимущества Expo

Expo - это быстрый способ разработки React Native приложений:
- ✅ Проще в настройке (нет Android Studio для разработки)
- ✅ Быстрая сборка APK через EAS Build
- ✅ Можно тестировать через приложение Expo Go
- ✅ Автоматическая настройка нативных зависимостей

## 🚀 Вариант 1: EAS Build (Рекомендуется)

### Шаг 1: Установите EAS CLI

```bash
npm install -g eas-cli
```

### Шаг 2: Войдите в аккаунт Expo

```bash
eas login
# Или зарегистрируйтесь
eas register
```

### Шаг 3: Настройте проект

```bash
cd /home/user/MindPeace
eas build:configure
```

Это создаст файл `eas.json` с настройками сборки.

### Шаг 4: Соберите APK

```bash
# Для внутреннего тестирования (APK)
eas build --platform android --profile preview

# Для публикации в Google Play (AAB)
eas build --platform android --profile production
```

**Время сборки**: 10-20 минут (на сервера Expo)

### Шаг 5: Скачайте APK

После завершения сборки вы получите ссылку на скачивание APK.

```bash
# Или скачайте через CLI
eas build:download --platform android --latest
```

---

## 🔧 Вариант 2: Локальная сборка (без Expo серверов)

### Шаг 1: "Eject" из Expo (создать android/)

```bash
cd /home/user/MindPeace

# Пребилд создаст папки android и ios
npx expo prebuild
```

**Результат**: Появятся папки `android/` и `ios/`

### Шаг 2: Соберите локально

```bash
# Debug APK
cd android
./gradlew assembleDebug

# Release APK
./gradlew assembleRelease
```

**Результат**: `android/app/build/outputs/apk/release/app-release.apk`

---

## 📱 Тестирование через Expo Go

Для быстрого тестирования без сборки APK:

### Шаг 1: Установите Expo Go на телефон

- Android: https://play.google.com/store/apps/details?id=host.exp.exponent
- iOS: https://apps.apple.com/app/expo-go/id982107779

### Шаг 2: Запустите Metro bundler

```bash
cd /home/user/MindPeace
npx expo start
```

### Шаг 3: Сканируйте QR код

Откройте Expo Go на телефоне и отсканируйте QR код.

---

## 🎯 Рекомендуемый процесс

### Разработка
```bash
# Разработка и тестирование
npx expo start

# Сканируйте QR в Expo Go
```

### Сборка APK для тестирования
```bash
# Первый раз настройте EAS
eas build:configure

# Соберите APK
eas build --platform android --profile preview
```

### Публикация в Google Play
```bash
# Соберите AAB
eas build --platform android --profile production

# Загрузите AAB в Google Play Console
```

---

## ⚙️ Настройка eas.json

После выполнения `eas build:configure` создается файл `eas.json`:

```json
{
  "cli": {
    "version": ">= 5.2.0"
  },
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },
    "preview": {
      "distribution": "internal",
      "android": {
        "buildType": "apk"
      }
    },
    "production": {
      "android": {
        "buildType": "aab"
      }
    }
  },
  "submit": {
    "production": {}
  }
}
```

**Профили:**
- `development` - для разработки с Expo Go
- `preview` - APK для тестирования
- `production` - AAB для Google Play

---

## 📦 Установка дополнительных зависимостей

Наш проект использует дополнительные библиотеки. Установите их:

```bash
cd /home/user/MindPeace

# Установите зависимости из оригинального package.json
npm install @react-navigation/native @react-navigation/bottom-tabs
npm install react-native-reanimated react-native-gesture-handler
npm install react-native-linear-gradient
npm install expo-linear-gradient # Expo версия
npm install @reduxjs/toolkit react-redux
npm install date-fns

# Для Expo нужны совместимые версии
npx expo install react-native-reanimated react-native-gesture-handler
npx expo install expo-linear-gradient
```

---

## 🔑 Подпись APK в EAS

### Автоматическая подпись (рекомендуется)

EAS автоматически создаст и управляет ключами:

```bash
eas build --platform android --profile production
```

### Использование своего keystore

1. Создайте keystore локально
2. Загрузите в EAS:

```bash
eas credentials
```

Следуйте инструкциям для загрузки вашего keystore.

---

## 📊 Сравнение: EAS Build vs Локальная сборка

| Функция | EAS Build | Локальная сборка |
|---------|-----------|------------------|
| Требует Android Studio | ❌ Нет | ✅ Да |
| Время сборки | 10-20 мин | 5-10 мин |
| Автоматическая подпись | ✅ Да | ❌ Ручная |
| Облачная сборка | ✅ Да | ❌ Нет |
| Бесплатные сборки | 30/месяц | ∞ Неограниченно |
| Размер APK | ~50-80 MB | ~50-80 MB |

---

## 🆘 Часто возникающие проблемы

### Проблема: "SDK location not found"

**Решение:**
```bash
# После prebuild настройте SDK
export ANDROID_HOME=$HOME/Library/Android/sdk
```

### Проблема: EAS Build требует оплату

**Решение:**
- Бесплатный план: 30 сборок/месяц
- Если превышен лимит, используйте локальную сборку (`npx expo prebuild`)

### Проблема: Большой размер APK

**Решение:**
```json
// app.json
{
  "expo": {
    "android": {
      "enableProguardInReleaseBuilds": true,
      "enableShrinkResourcesInReleaseBuilds": true
    }
  }
}
```

---

## 📋 Быстрая шпаргалка

```bash
# Разработка
npx expo start

# Локальная сборка (требует prebuild)
npx expo prebuild
cd android && ./gradlew assembleRelease

# Облачная сборка APK
eas build --platform android --profile preview

# Облачная сборка AAB (для Google Play)
eas build --platform android --profile production

# Скачать последнюю сборку
eas build:download --platform android --latest

# Тестирование на устройстве
adb install app-release.apk
```

---

## 🎯 Следующие шаги

1. **Установите зависимости**:
   ```bash
   cd /home/user/MindPeace
   npm install
   ```

2. **Запустите для тестирования**:
   ```bash
   npx expo start
   ```

3. **Выберите метод сборки**:
   - EAS Build (проще, облачная)
   - Локальная сборка (быстрее, требует настройки)

4. **Соберите APK**:
   ```bash
   eas build --platform android --profile preview
   ```

---

**Готово! Ваш проект MindPeace готов к разработке и сборке! 🚀**
