#!/bin/bash

pushd android
./gradlew --stop
./gradlew bundleRelease --stacktrace
popd