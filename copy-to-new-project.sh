#!/bin/bash

echo "🚀 Копирование файлов в новый проект MindPeace..."

# Проверка что проект создан
if [ ! -d "/home/user/MindPeace" ]; then
    echo "❌ Проект MindPeace не найден!"
    exit 1
fi

# Удаляем стандартный src если есть
if [ -d "/home/user/MindPeace/src" ]; then
    echo "🗑️  Удаляем стандартный src..."
    rm -rf /home/user/MindPeace/src
fi

# Копируем наш src
echo "📁 Копируем src/..."
cp -r /home/user/meditation/src /home/user/MindPeace/

# Копируем package.json
echo "📦 Копируем package.json..."
cp /home/user/meditation/package.json /home/user/MindPeace/

# Копируем tsconfig
echo "⚙️  Копируем tsconfig.json..."
cp /home/user/meditation/tsconfig.json /home/user/MindPeace/

# Копируем документацию
echo "📚 Копируем документацию..."
cp /home/user/meditation/CONCEPT.md /home/user/MindPeace/
cp /home/user/meditation/ARCHITECTURE.md /home/user/MindPeace/
cp /home/user/meditation/DESIGN.md /home/user/MindPeace/
cp /home/user/meditation/BUILD_GUIDE.md /home/user/MindPeace/
cp /home/user/meditation/USAGE_EXAMPLES.md /home/user/MindPeace/
cp /home/user/meditation/README.md /home/user/MindPeace/

# Создаем App.tsx
echo "📄 Создаем App.tsx..."
cat > /home/user/MindPeace/App.tsx << 'EOF'
import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  return <AppNavigator />;
};

export default App;
EOF

# Создаем index.js если нужно
if [ ! -f "/home/user/MindPeace/index.js" ]; then
    echo "📄 Создаем index.js..."
    cat > /home/user/MindPeace/index.js << 'EOF'
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
EOF
fi

echo "✅ Все файлы скопированы!"
echo ""
echo "📋 Следующие шаги:"
echo "1. cd /home/user/MindPeace"
echo "2. npm install"
echo "3. cd android && ./gradlew clean && cd .."
echo "4. npx react-native run-android"
