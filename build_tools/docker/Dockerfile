FROM ubuntu

RUN apt-get update && apt-get install -y \
    openjdk-17-jdk \
    vim \
    git \
    unzip \
    libglu1 \
    libpulse-dev \
    libasound2 \
    libc6 \
    libstdc++6 \
    libx11-6 \
    libx11-xcb1 \
    libxcb1 \
    libxcomposite1 \
    libxcursor1 \
    libxi6 \
    libxtst6 \
    libnss3 \
    wget

ARG GRADLE_VERSION=8.0.1
ARG ANDROID_API_LEVEL=33
ARG ANDROID_BUILD_TOOLS_LEVEL=34.0.0
ARG CMAKE_VERSION=3.22.1

RUN wget -q 'https://dl.google.com/android/repository/commandlinetools-linux-10406996_latest.zip' -P /tmp \
    && unzip -qq -d /opt/android /tmp/commandlinetools-linux-10406996_latest.zip \
    && mkdir /opt/android/cmdline-tools/latest \ 
    && cd /opt/android/cmdline-tools \
    && mv NOTICE.txt  bin  lib  source.properties latest \
    && cd / \
    && yes Y | /opt/android/cmdline-tools/latest/bin/sdkmanager \
        --install "platform-tools" "system-images;android-${ANDROID_API_LEVEL};google_apis;x86_64" \
        "platforms;android-${ANDROID_API_LEVEL}" "build-tools;${ANDROID_BUILD_TOOLS_LEVEL}" "cmake;${CMAKE_VERSION}" > /dev/null 2>&1 \
    && yes Y | /opt/android/cmdline-tools/latest/bin/sdkmanager --licenses > /dev/null 2>&1

WORKDIR /build
COPY package.json /build

ARG NODE_MAJOR=21
RUN apt-get update \
    && apt-get install -y ca-certificates curl gnupg \
    && mkdir -p /etc/apt/keyrings \
    && curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg \
    && echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | tee /etc/apt/sources.list.d/nodesource.list \
    && apt-get update \
    && apt-get install make nodejs -y \
    && npm install

ENV GRADLE_HOME=/opt/gradle/gradle-$GRADLE_VERSION
ENV ANDROID_HOME=/opt/android
ENV PATH "$PATH:$GRADLE_HOME/bin:/opt/gradlew:$ANDROID_HOME/emulator:$ANDROID_HOME/tools/bin:$ANDROID_HOME/platform-tools"
ENV LD_LIBRARY_PATH "$ANDROID_HOME/emulator/lib64:$ANDROID_HOME/emulator/lib64/qt/lib"
COPY --chmod=0755 build_tools/docker/build.sh /

ENTRYPOINT [ "/bin/bash" ]