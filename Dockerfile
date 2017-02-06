FROM nginx:1.11.8-alpine

MAINTAINER Robert Smallwood <rdsmallwood928@gmail.com>

RUN echo 'daemon off;' >> /etc/nginx/nginx.conf

ADD www/ /etc/nginx/nginx.conf
COPY docker/conf/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["/usr/sbin/nginx"]
