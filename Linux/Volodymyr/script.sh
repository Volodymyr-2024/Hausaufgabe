#!/bin/bash

echo 'Hello!'

DIR=$pwd
echo "Current dir $DIR"

PROCES=$(ps)	
echo "Current proceses:"
echo "$PROCES"

DATE=$(date)
echo "Current date: $DATE"

ls /var/log | grep "error"

wc -l /proc/cpuinfo

cat /etc/passwd | awk -F ':' '{print$1,$6}'

echo 'Работа скрипта выполнена'
