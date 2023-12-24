#!/bin/bash

set -e

docker build build_tools/docker -t droid_builder
docker run --name android_apk -v ./:/build droid_builder /build.sh 
docker cp android_apk:/build/android/app/build/outputs/apk/release/* ./release.abb
docker rm android_apk