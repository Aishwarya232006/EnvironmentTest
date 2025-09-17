# Environment Setup – CPAN 213

## 1️⃣ System Information
- **Operating System:** Windows 10 / 11 (64-bit)  
- **CPU / RAM:** (e.g., Intel i5, 8GB RAM)  
- **Disk Space:** (free space available during setup)

---

## 2️⃣ Installed Software & Versions
| Tool | Version | Notes |
|------|---------|-------|
| Node.js | vXX.XX.X | Installed from [nodejs.org](https://nodejs.org) |
| npm | vXX.XX.X | Installed with Node.js |
| React Native CLI | vX.X.X | Installed globally via `npm install -g @react-native-community/cli` |
| Android Studio | 202X.X | Installed SDK + AVD |
| Android SDK Build-Tools | XX.X.X | Added through Android Studio SDK Manager |
| JDK (Java) | vXX | Installed for Gradle |
| VS Code | X.X.X | Editor with React Native extensions |

---

## 3️⃣ Setup Steps
1. Installed Node.js & npm.  
2. Installed React Native CLI globally.  
3. Installed Android Studio and configured:
   - SDK path and environment variable `ANDROID_HOME`
   - Installed **Android SDK Platform** & **Build Tools**
   - Created an Android Virtual Device (Pixel 4, Android 12)
4. Cloned/created React Native project using:
   ```bash
   npx react-native init EnvironmentTest
