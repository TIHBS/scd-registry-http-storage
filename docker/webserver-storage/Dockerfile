FROM httpd:2.4
RUN echo "Header set Access-Control-Allow-Origin "*"" >> /usr/local/apache2/conf/httpd.conf
COPY scd.json .htaccess /usr/local/apache2/htdocs/
