#!/bin/bash

set -e

custom_tag=${custom_tag:-$(git log -n1 --format="%h")}
IMAGE_NAME="droid_builder:$custom_tag"

docker build . -f build_tools/docker/Dockerfile -t $IMAGE_NAME
docker run --name android_apk -v ./:/build $IMAGE_NAME /build.sh 
docker cp android_apk:/build/android/app/build/outputs/bundle/release/release.aab ./release.aab
docker rm android_apk