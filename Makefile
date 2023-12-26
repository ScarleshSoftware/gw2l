SHELL=/bin/bash

dependencies:
	sudo apt update && sudo apt install -y ninja-build default-jre default-jdk
	npm install

env:
	./build_tools/set_env.sh

release: env
	./build_tools/build_release.sh

docker_build: env
	./build_tools/docker_build.sh

dev_build:
	npx expo run:android