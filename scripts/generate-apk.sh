#!/bin/bash

npm run bundle
cd android
./gradlew assembleDebug