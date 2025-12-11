# 📱 Руководство по сборке APK для Android

## 📋 Содержание
1. [Подготовка окружения](#подготовка-окружения)
2. [Инициализация React Native проекта](#инициализация-react-native-проекта)
3. [Настройка Android Studio](#настройка-android-studio)
4. [Сборка Debug APK](#сборка-debug-apk)
5. [Сборка Release APK](#сборка-release-apk)
6. [Подпись APK](#подпись-apk)
7. [Оптимизация размера](#оптимизация-размера)
8. [Устранение проблем](#устранение-проблем)

---

## 🛠️ Подготовка окружения

### 1. Установите необходимое ПО

**Windows:**
```bash
# Установите через Chocolatey
choco install nodejs openjdk11 androidstudio
```

**macOS:**
```bash
# Установите через Homebrew
brew install node watchman
brew install --cask android-studio
```

**Linux:**
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install nodejs npm openjdk-11-jdk
```

### 2. Установите React Native CLI
```bash
npm install -g react-native-cli
```

### 3. Установите Android Studio
- Скачайте: https://developer.android.com/studio
- Установите Android SDK
- Установите Android SDK Platform 33 (Android 13)
- Установите Android SDK Build-Tools

### 4. Настройте переменные окружения

**Windows:**
```bash
setx ANDROID_HOME "%LOCALAPPDATA%\Android\Sdk"
setx PATH "%PATH%;%LOCALAPPDATA%\Android\Sdk\platform-tools"
```

**macOS/Linux (добавьте в ~/.bashrc или ~/.zshrc):**
```bash
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

Проверьте установку:
```bash
node --version
npm --version
java -version
adb version
```

---

## 🚀 Инициализация React Native проекта

### Шаг 1: Инициализируйте проект

```bash
# Перейдите в директорию проекта
cd /home/user/meditation

# Инициализируйте React Native (если еще не сделано)
npx react-native init MindPeace --template react-native-template-typescript
```

### Шаг 2: Установите зависимости

```bash
# Установите npm зависимости
npm install

# Или используйте yarn
yarn install
```

### Шаг 3: Установите под-зависимости для Android

```bash
cd android
./gradlew clean
cd ..
```

---

## 🔧 Настройка Android Studio

### Шаг 1: Откройте проект в Android Studio

1. Запустите Android Studio
2. Выберите **File > Open**
3. Откройте папку `meditation/android`
4. Дождитесь индексации и синхронизации Gradle

### Шаг 2: Настройте Android SDK

1. Откройте **Tools > SDK Manager**
2. Во вкладке **SDK Platforms** установите:
   - ✅ Android 13.0 (API 33)
   - ✅ Android 12.0 (API 31)
   - ✅ Android 11.0 (API 30)

3. Во вкладке **SDK Tools** установите:
   - ✅ Android SDK Build-Tools 33
   - ✅ Android SDK Command-line Tools
   - ✅ Android Emulator
   - ✅ Android SDK Platform-Tools
   - ✅ Google Play Services

### Шаг 3: Настройте эмулятор (опционально)

1. Откройте **Tools > Device Manager**
2. Нажмите **Create Device**
3. Выберите **Pixel 5** или другое устройство
4. Выберите **System Image**: Android 13.0 (API 33)
5. Нажмите **Finish**

### Шаг 4: Обновите настройки Gradle

Откройте `android/build.gradle` и проверьте:

```gradle
buildscript {
    ext {
        buildToolsVersion = "33.0.0"
        minSdkVersion = 23
        compileSdkVersion = 33
        targetSdkVersion = 33
        kotlinVersion = "1.8.0"
    }

    repositories {
        google()
        mavenCentral()
    }

    dependencies {
        classpath("com.android.tools.build:gradle:7.4.2")
        classpath("org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlinVersion")
    }
}
```

Откройте `android/gradle/wrapper/gradle-wrapper.properties`:

```properties
distributionUrl=https\://services.gradle.org/distributions/gradle-7.6-all.zip
```

---

## 🐛 Сборка Debug APK

### Метод 1: Через командную строку

```bash
# Перейдите в директорию проекта
cd /home/user/meditation

# Соберите Debug APK
cd android
./gradlew assembleDebug
```

**Результат:**
```
APK находится в: android/app/build/outputs/apk/debug/app-debug.apk
```

### Метод 2: Через Android Studio

1. Откройте проект `meditation/android` в Android Studio
2. В меню выберите **Build > Build Bundle(s) / APK(s) > Build APK(s)**
3. Дождитесь завершения сборки
4. Нажмите на уведомление **locate** чтобы найти APK

### Метод 3: Через React Native CLI

```bash
# Из корня проекта
npx react-native run-android
```

Это автоматически соберет и установит Debug APK на подключенное устройство.

### Установка Debug APK на устройство

```bash
# Подключите устройство по USB с включенной отладкой
adb devices

# Установите APK
adb install android/app/build/outputs/apk/debug/app-debug.apk
```

---

## 📦 Сборка Release APK

### Шаг 1: Создайте keystore для подписи

```bash
# Перейдите в директорию android/app
cd /home/user/meditation/android/app

# Создайте keystore (выполните один раз)
keytool -genkeypair -v -storetype PKCS12 -keystore mindpeace-release.keystore -alias mindpeace-key -keyalg RSA -keysize 2048 -validity 10000

# Введите пароли и информацию
# Пример:
# - Keystore password: MySecurePassword123!
# - Key password: MySecurePassword123!
# - Name: MindPeace Team
# - Organizational Unit: Development
# - Organization: MindPeace
# - City: Moscow
# - State: Moscow
# - Country code: RU
```

**⚠️ ВАЖНО:** Сохраните пароли в надежном месте! Без них вы не сможете обновлять приложение!

### Шаг 2: Настройте gradle.properties

Откройте или создайте `android/gradle.properties` и добавьте:

```properties
MINDPEACE_UPLOAD_STORE_FILE=mindpeace-release.keystore
MINDPEACE_UPLOAD_KEY_ALIAS=mindpeace-key
MINDPEACE_UPLOAD_STORE_PASSWORD=MySecurePassword123!
MINDPEACE_UPLOAD_KEY_PASSWORD=MySecurePassword123!
```

**⚠️ Безопасность:** Не коммитьте этот файл в Git! Добавьте в `.gitignore`:

```bash
echo "android/gradle.properties" >> .gitignore
echo "android/app/*.keystore" >> .gitignore
```

### Шаг 3: Настройте build.gradle для подписи

Откройте `android/app/build.gradle` и добавьте:

```gradle
android {
    ...

    signingConfigs {
        debug {
            storeFile file('debug.keystore')
            storePassword 'android'
            keyAlias 'androiddebugkey'
            keyPassword 'android'
        }
        release {
            if (project.hasProperty('MINDPEACE_UPLOAD_STORE_FILE')) {
                storeFile file(MINDPEACE_UPLOAD_STORE_FILE)
                storePassword MINDPEACE_UPLOAD_STORE_PASSWORD
                keyAlias MINDPEACE_UPLOAD_KEY_ALIAS
                keyPassword MINDPEACE_UPLOAD_KEY_PASSWORD
            }
        }
    }

    buildTypes {
        debug {
            signingConfig signingConfigs.debug
        }
        release {
            signingConfig signingConfigs.release
            minifyEnabled true
            shrinkResources true
            proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'
        }
    }
}
```

### Шаг 4: Соберите Release APK

**Метод 1: Командная строка**

```bash
cd /home/user/meditation/android
./gradlew assembleRelease
```

**Результат:**
```
APK находится в: android/app/build/outputs/apk/release/app-release.apk
```

**Метод 2: Android Studio**

1. Откройте проект в Android Studio
2. В меню: **Build > Select Build Variant**
3. Выберите **release**
4. В меню: **Build > Build Bundle(s) / APK(s) > Build APK(s)**
5. Дождитесь завершения

### Шаг 5: Проверьте подпись APK

```bash
# Проверьте что APK подписан
jarsigner -verify -verbose -certs android/app/build/outputs/apk/release/app-release.apk

# Должно вывести: "jar verified."
```

---

## 📐 Оптимизация размера APK

### 1. Включите ProGuard

В `android/app/build.gradle`:

```gradle
buildTypes {
    release {
        minifyEnabled true
        shrinkResources true
        proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'
    }
}
```

### 2. Настройте ProGuard Rules

Создайте `android/app/proguard-rules.pro`:

```proguard
# React Native
-keep class com.facebook.react.** { *; }
-keep class com.facebook.hermes.** { *; }

# Keep native methods
-keepclassmembers class * {
    native <methods>;
}

# Keep models
-keep class com.mindpeace.models.** { *; }
```

### 3. Разделите APK по архитектуре (ABI Split)

В `android/app/build.gradle`:

```gradle
android {
    ...
    splits {
        abi {
            enable true
            reset()
            include "armeabi-v7a", "arm64-v8a", "x86", "x86_64"
            universalApk true
        }
    }
}
```

Это создаст отдельные APK для каждой архитектуры + универсальный APK.

### 4. Используйте Android App Bundle (AAB)

```bash
cd android
./gradlew bundleRelease
```

**Результат:**
```
AAB находится в: android/app/build/outputs/bundle/release/app-release.aab
```

AAB автоматически оптимизируется Google Play для каждого устройства.

### 5. Оптимизируйте изображения

```bash
# Конвертируйте PNG в WebP
# В Android Studio: Right-click на изображении > Convert to WebP
```

### 6. Удалите неиспользуемые ресурсы

В `android/app/build.gradle`:

```gradle
android {
    buildTypes {
        release {
            shrinkResources true
            minifyEnabled true
        }
    }
}
```

---

## 🎯 Пошаговая инструкция в Android Studio

### Вариант A: Сборка через GUI

#### Шаг 1: Откройте проект
1. Запустите **Android Studio**
2. **File > Open** → выберите `meditation/android`
3. Дождитесь синхронизации Gradle

#### Шаг 2: Выберите Build Variant
1. В левом меню: **Build > Select Build Variant**
2. Выберите:
   - **debug** для тестирования
   - **release** для публикации

#### Шаг 3: Соберите APK
1. **Build > Build Bundle(s) / APK(s) > Build APK(s)**
2. Дождитесь завершения (внизу экрана)
3. Нажмите **locate** в уведомлении

#### Шаг 4: Найдите APK
```
Debug: android/app/build/outputs/apk/debug/app-debug.apk
Release: android/app/build/outputs/apk/release/app-release.apk
```

### Вариант B: Сборка через Terminal в Android Studio

#### Шаг 1: Откройте Terminal
1. В Android Studio: **View > Tool Windows > Terminal**

#### Шаг 2: Выполните команды

**Для Debug:**
```bash
./gradlew assembleDebug
```

**Для Release:**
```bash
./gradlew assembleRelease
```

#### Шаг 3: Проверьте результат
```bash
# Посмотрите размер APK
ls -lh app/build/outputs/apk/release/

# Установите на подключенное устройство
adb install -r app/build/outputs/apk/release/app-release.apk
```

---

## 🐛 Устранение проблем

### Проблема 1: Gradle sync failed

**Решение:**
```bash
cd android
./gradlew clean
./gradlew build --refresh-dependencies
```

### Проблема 2: SDK not found

**Решение:**
1. Откройте **File > Project Structure > SDK Location**
2. Укажите путь к Android SDK:
   - Windows: `C:\Users\<username>\AppData\Local\Android\Sdk`
   - macOS: `/Users/<username>/Library/Android/sdk`
   - Linux: `/home/<username>/Android/Sdk`

### Проблема 3: Build tools version not found

**Решение:**
1. Откройте **Tools > SDK Manager > SDK Tools**
2. Установите нужную версию Build Tools
3. В `android/build.gradle` измените:
   ```gradle
   buildToolsVersion = "33.0.0"
   ```

### Проблема 4: OutOfMemoryError

**Решение:**
Откройте `android/gradle.properties` и добавьте:
```properties
org.gradle.jvmargs=-Xmx4096m -XX:MaxPermSize=512m -XX:+HeapDumpOnOutOfMemoryError -Dfile.encoding=UTF-8
```

### Проблема 5: APK не установлен на устройство

**Решение:**
```bash
# Удалите старую версию
adb uninstall com.mindpeace

# Установите заново
adb install -r app-release.apk
```

### Проблема 6: React Native bundle failed

**Решение:**
```bash
# Очистите Metro bundler кэш
npx react-native start --reset-cache

# Пересоберите
cd android
./gradlew clean
./gradlew assembleRelease
```

---

## 📊 Проверка размера APK

```bash
# Информация о APK
aapt dump badging android/app/build/outputs/apk/release/app-release.apk

# Размер APK
ls -lh android/app/build/outputs/apk/release/app-release.apk

# Анализ содержимого
unzip -l android/app/build/outputs/apk/release/app-release.apk | sort -n -k 4
```

**В Android Studio:**
1. **Build > Analyze APK**
2. Выберите собранный APK
3. Изучите какие файлы занимают больше всего места

---

## 🚀 Публикация в Google Play

### Шаг 1: Создайте Android App Bundle (AAB)

```bash
cd android
./gradlew bundleRelease
```

Результат: `android/app/build/outputs/bundle/release/app-release.aab`

### Шаг 2: Загрузите в Google Play Console

1. Перейдите: https://play.google.com/console
2. Создайте новое приложение
3. Заполните информацию о приложении
4. Загрузите AAB в **Production** или **Internal Testing**
5. Заполните Store Listing (описание, иконки, скриншоты)
6. Отправьте на ревью

### Шаг 3: Требования Google Play

- Целевой SDK: минимум API 33 (Android 13)
- 64-битная архитектура (arm64-v8a)
- Подписанный APK/AAB
- Privacy Policy URL
- Иконки: 512x512px
- Скриншоты: минимум 2

---

## ✅ Чек-лист перед публикацией

- [ ] Проверен Debug APK на устройстве
- [ ] Создан Release keystore
- [ ] Настроена подпись в gradle
- [ ] Собран Release APK
- [ ] Проверена подпись APK (jarsigner)
- [ ] Протестирован на реальном устройстве
- [ ] Включен ProGuard
- [ ] Оптимизирован размер APK
- [ ] Обновлен versionCode и versionName
- [ ] Подготовлены иконки и скриншоты
- [ ] Написано описание для Store Listing

---

## 📱 Быстрая шпаргалка

```bash
# Debug APK
cd android && ./gradlew assembleDebug

# Release APK
cd android && ./gradlew assembleRelease

# AAB для Google Play
cd android && ./gradlew bundleRelease

# Установка на устройство
adb install -r app/build/outputs/apk/release/app-release.apk

# Проверка подписи
jarsigner -verify -verbose app-release.apk

# Очистка
cd android && ./gradlew clean

# Информация о APK
aapt dump badging app-release.apk
```

---

**Готово! Теперь у вас есть готовый APK для установки на Android устройства! 📱**
