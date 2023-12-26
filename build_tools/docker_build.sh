#!/bin/bash

set -e

custom_tag=${custom_tag:-$(git log -n1 --format="%h")}

docker build . -f build_tools/docker/Dockerfile -t droid_builder
docker run --name android_apk -v ./:/build droid_builder /build.sh 
docker cp android_apk:/build/android/app/build/outputs/bundle/release/release.aab ./release.aab
docker rm android_apk