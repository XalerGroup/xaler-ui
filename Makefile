THIS_FILE := $(lastword $(MAKEFILE_LIST))
.PHONY: help run stop restart build destroy log shell deploy

help:
	make -pRrq  -f $(THIS_FILE) : 2>/dev/null |	awk -v RS= -F: '/^# File/,/^# Finished Make data base/ {if ($$1 !~ "^[#.]") {print $$1}}' | sort | egrep -v -e '^[^[:alnum:]]' -e '^$@$$'

build:
	docker-compose -f docker-compose.yaml up -d --build $(c)
build-dev:
	docker-compose -f docker-compose-dev.yaml build $(c)
up:
	docker-compose -f docker-compose-dev.yaml up -d $(c)
stop:
	docker-compose -f docker-compose-dev.yaml stop $(c)
restart:
	docker-compose -f docker-compose-dev.yaml stop $(c)
	docker-compose -f docker-compose-dev.yaml up -d $(c)
destroy:
	docker-compose -f docker-compose-dev.yaml down -v $(c)
log:
	docker-compose -f docker-compose-dev.yaml logs --tail=100 -f xaler-ui-dev
shell:
	docker-compose -f docker-compose-dev.yaml exec xaler-ui-dev /bin/bash


