#!/bin/bash


for i in {1..100}; do
  touch /opt/100624-wdm/Volodymyr/dir1/$(echo $RANDOM)
done
