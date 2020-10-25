FROM        node:latest as develop

WORKDIR     /opt/ui

ADD         package.json ./package.json
ADD         yarn.lock ./yarn.lock

ENV         NODE_PATH=./node_modules
ENV         PATH=$PATH:/node_modules/.bin
RUN         yarn install

COPY        . /opt/ui

EXPOSE      3000:8080

ENTRYPOINT  ["/bin/bash", "/opt/ui/run.sh"]

CMD         ["serve"]
