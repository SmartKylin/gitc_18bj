#!/bin/sh
# cd /home/work/nginx/ksyun
nowdate=`date +%Y%m%d%H%M`
echo ${nowdate}
tar -czf html.$nowdate.tar.gz ./build

