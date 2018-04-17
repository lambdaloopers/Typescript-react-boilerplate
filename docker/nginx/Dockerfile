FROM library/nginx:1.13

ARG USER_ID=1000
ARG GROUP_ID=1000

RUN groupmod -g ${GROUP_ID:-1000} www-data \
  && usermod -u ${USER_ID:-1000} www-data

COPY ./app/build /var/www/html
COPY ./docker/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf

RUN chown -R www-data:www-data /var/www/html
