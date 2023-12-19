# gw2l-react
![GW 2l](assets/icon.png "App Icon")

## SETUP

----
- Download Node.js from: https://nodejs.org/en/
- On Windows, set the execution policy from PS as an Administrator and run:
```powershell
Set-ExecutionPolicy -ExecutionPolicy AllSigned -Scope LocalMachine
```
- For VSCode: `Ctrl + P` and write ``ext install npm script runner`` otherwise it won't be able to use npm in its integrated terminal
- Install expo globally `npm install -g react-native-cli`
#### Other pre-requisites (Linux)
```sh
sudo apt update && sudo apt install -y ninja-build default-jre default-jdk
```

## Dev
Create a [local.properties](android\local.properties) under the android folder

Windows:
```.properties
sdk.dir = C:\\Users\\USERNAME\\AppData\\Local\\Android\\sdk
# Optional
ndk.dir = C:\\Users\\USERNAME\\AppData\\Local\\Android\\sdk\\ndk\\<NDK_VERSION>
```
Linux:
```.properties
sdk.dir = ~/Android/sdk/Sdk/
# Optional
ndk.dir = ~/Android/sdk/Sdk/ndk/<NDK_VERSION>
```
```sh
npm run android
# or
npm run web
```

## Build

```sh
set -o allexport; source .env; set +o allexport
cd android
./gradlew bundleRelease
# or
npx react-native build-android --mode=release
```
The generated `aab` can be found in `android/app/build/outputs/bundle/release/app-release.aab`.


This can also double checked with react-native`'s feature:
```sh
npx react-native run-android --variant=release
```
