#!/bin/bash

pushd android
./gradlew --stop
./gradlew bundleRelease
popd