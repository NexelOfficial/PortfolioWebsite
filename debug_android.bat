@echo off

set Passcode=000000
set WebsiteLocation="C:\Users\natha\Documents\repos\Repo\Portfolio\PortfolioReact\my-app"

echo Unlocking phone...
adb shell input keyevent 26
adb shell input keyevent 82 && adb shell input text %Passcode% && adb shell input keyevent 66
cd %WebsiteLocation%
adb push "%CD%" /storage/emulated/0/Android/data/com.android.chrome/files/Download/
echo Pushing files...
for %%I in (.) do set CurrDirName=%%~nxI
adb shell am start -n com.android.chrome/com.google.android.apps.chrome.Main -a android.intent.action.VIEW -d 'file:////storage/emulated/0/Android/data/com.android.chrome/files/Download/%CurrDirName%/index.html'

:LOOP
cls
set /p page="Enter Page to visit: "
adb shell am start -n com.android.chrome/com.google.android.apps.chrome.Main -a android.intent.action.VIEW -d 'file:////storage/emulated/0/Android/data/com.android.chrome/files/Download/%CurrDirName%/%page%.html'
adb push "%CD%" /storage/emulated/0/Android/data/com.android.chrome/files/Download/
GOTO LOOP