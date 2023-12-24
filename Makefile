SHELL=/bin/bash

dependencies:
	sudo apt update && sudo apt install -y ninja-build default-jre default-jdk
	npm install

env:
	[[ -f .env ]] || set -o allexport; source .env; set +o allexport

release: env
	./build_tools/build_release.sh
