ENGINE := docker
DOCKERHUB_USERNAME :=
DOCKERHUB_PASSWORD :=

IMAGE_NAME := kj_portfolio
TAG := 
REGISTRY := docker.io/kjchow
IMAGE := $(REGISTRY)/$(IMAGE_NAME):$(TAG)
IMAGE_LATEST := $(REGISTRY)/$(IMAGE_NAME):latest

image:
	$(ENGINE) build \
		--no-cache \
		-t $(IMAGE) .

run:
	$(ENGINE) run -d \
		-p 80:80 \
		$(IMAGE)

pull:
	$(ENGINE) pull $(IMAGE)

push:
	$(ENGINE) push $(IMAGE)
	# tag latest
	$(ENGINE) tag $(IMAGE) $(IMAGE_LATEST)
	$(ENGINE) push $(IMAGE_LATEST)

clean: stop-remove
	$(ENGINE) rmi $(IMAGE) 2>/dev/null || true
	$(ENGINE) rmi $(IMAGE_LATEST) 2>/dev/null || true

stop-remove:
	$(ENGINE) ps -a -q --filter "ancestor=$(IMAGE)" | xargs -r $(ENGINE) stop
	$(ENGINE) ps -a -q --filter "ancestor=$(IMAGE)" | xargs -r $(ENGINE) rm

login:
	echo "$(DOCKERHUB_PASSWORD)" | $(ENGINE) login -u "$(DOCKERHUB_USERNAME)" --password-stdin $(REGISTRY)