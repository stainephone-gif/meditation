@echo off
echo ==========================================
echo MindPeace Setup Check
echo ==========================================
echo.

echo [1/5] Checking Node.js...
node --version
if %errorlevel% neq 0 (
    echo ERROR: Node.js not found!
    echo Download from: https://nodejs.org
    goto :end
)
echo OK: Node.js is installed
echo.

echo [2/5] Checking npm...
npm --version
if %errorlevel% neq 0 (
    echo ERROR: npm not found!
    goto :end
)
echo OK: npm is installed
echo.

echo [3/5] Checking package.json...
if exist "package.json" (
    echo OK: package.json found
) else (
    echo ERROR: package.json not found!
    echo Make sure you're in the project root directory
    goto :end
)
echo.

echo [4/5] Checking node_modules...
if exist "node_modules" (
    echo OK: node_modules folder exists
    echo Checking key packages...

    if exist "node_modules\expo" (
        echo   - expo: OK
    ) else (
        echo   - expo: MISSING!
        set MISSING=1
    )

    if exist "node_modules\react" (
        echo   - react: OK
    ) else (
        echo   - react: MISSING!
        set MISSING=1
    )

    if exist "node_modules\react-native" (
        echo   - react-native: OK
    ) else (
        echo   - react-native: MISSING!
        set MISSING=1
    )

    if defined MISSING (
        echo.
        echo WARNING: Some packages are missing!
        echo Run: npm install --legacy-peer-deps
        goto :end
    )
) else (
    echo ERROR: node_modules folder not found!
    echo.
    echo You need to install dependencies first:
    echo   npm install --legacy-peer-deps
    echo.
    goto :end
)
echo.

echo [5/5] Checking android folder...
if exist "android" (
    echo OK: android folder exists
    if exist "android\app\build.gradle" (
        echo OK: android\app\build.gradle exists
    ) else (
        echo ERROR: android\app\build.gradle not found!
    )
) else (
    echo ERROR: android folder not found!
    echo Run: npx expo prebuild --platform android
)
echo.

echo ==========================================
echo Setup Check Complete!
echo ==========================================
echo.
echo Everything looks good! You can now:
echo 1. Open Android Studio
echo 2. File ^> Open ^> %CD%\android
echo 3. Wait for Gradle Sync to complete
echo 4. Build ^> Build APK(s)
echo.

:end
pause
