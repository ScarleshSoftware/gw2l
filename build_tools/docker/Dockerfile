FROM ubuntu

RUN apt-get update && apt-get install -y \
    openjdk-8-jdk \
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

ARG GRADLE_VERSION=5.4.1
ARG ANDROID_API_LEVEL=28
ARG ANDROID_BUILD_TOOLS_LEVEL=28.0.3
ARG EMULATOR_NAME='test'

RUN wget -q 'https://dl.google.com/android/repository/sdk-tools-linux-4333796.zip' -P /tmp \
    && unzip -qq -d /opt/android /tmp/sdk-tools-linux-4333796.zip \
    && yes Y | /opt/android/tools/bin/sdkmanager \
        --install "platform-tools" "system-images;android-${ANDROID_API_LEVEL};google_apis;x86" \
        "platforms;android-${ANDROID_API_LEVEL}" "build-tools;${ANDROID_BUILD_TOOLS_LEVEL}" "emulator" > /dev/null 2>&1 \
    && yes Y | /opt/android/tools/bin/sdkmanager --licenses > /dev/null 2>&1

RUN wget -q https://services.gradle.org/distributions/gradle-${GRADLE_VERSION}-bin.zip -P /tmp \
    && unzip -qq -d /opt/gradle /tmp/gradle-${GRADLE_VERSION}-bin.zip \
    && mkdir /opt/gradlew \
    && /opt/gradle/gradle-${GRADLE_VERSION}/bin/gradle wrapper \
        --gradle-version ${GRADLE_VERSION} \
        --distribution-type all \
        -p /opt/gradlew \
    && /opt/gradle/gradle-${GRADLE_VERSION}/bin/gradle wrapper \
        -p /opt/gradlew

ARG NODE_MAJOR=21
RUN apt-get update \
    && apt-get install -y ca-certificates curl gnupg openjdk-11-jdk \
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
COPY --chmod=0755 build.sh /

WORKDIR /build
ENTRYPOINT [ "/bin/bash" ]