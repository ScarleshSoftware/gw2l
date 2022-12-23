# gw2l-react
![GW 2l](assets\icon.png "App Icon")

## SETUP

----
- Download Node.js from: https://nodejs.org/en/
- On windows, set the execution policy from PS as an Administrator and run:
```powershell
Set-ExecutionPolicy -ExecutionPolicy AllSigned -Scope LocalMachine
```
- For VSCode: `Ctrl + P` and write ``ext install npm script runner`` otherwise it won't be able to use npm in its integrated terminal
- Install expo globally `npm install -g react-native-cli`


## Dev
Create a `local.properties` under the android folder
```.properties
sdk.dir = C:\\Users\\USERNAME\\AppData\\Local\\Android\\sdk
ndk.dir = C:\\Users\\USERNAME\\AppData\\Local\\Android\\sdk\\ndk\\NDS_VERSION
```
```sh
npm run android
# or
npm run web
```

## Build

```sh
cd android
./gradlew bundleRelease
```
The generated `aab` can be found in `android/app/build/outputs/bundle/release/app-release.aab`.


This can also double checked with react-native`'s feature:
```sh
npx react-native run-android --variant=release
```