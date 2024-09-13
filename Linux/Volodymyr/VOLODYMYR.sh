#!/bin/bash

current_date=$(date +"%d.%m.%y")

for i in {1..10}
do
	touch "${i}_${current_date}"
done

