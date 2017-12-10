FROM library/node:9.0

COPY ./app /home/nodejs

COPY ./docker/node/entrypoint.sh /entrypoint.sh

RUN groupmod -g 1000 node \
  && usermod -u 1000 node

USER node

WORKDIR /home/nodejs

ENTRYPOINT ["/entrypoint.sh"]