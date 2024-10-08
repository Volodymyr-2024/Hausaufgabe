#
#Написать скрипт, который будет бесконечно пинговать указанный адрес (переменная или ввод пользователя) с интервалом 1
#секунда между попытками. Если время пинга превышает 100 мс или не удается выполнить пинг в течение 3 последовательных
#отправок пакетов, скрипт просто выведет сообщения об этом.


#!/bin/bash

read -p "Введите адрес для пинга: " address

#счетчик неудачных пингов
failed_ping_count=0

while true; do
	ping_time=$(ping -c 1 $address | grep 'time=' | awk -F'time=' '{print $2}' | awk '{print$1}')
	if [ -z "$ping_time" ]; then
		# Если пинг не прошел, увеличиваем счетчик неудачных пингов
		failed_ping_count=$((failed_ping_count + 1))
		echo "Не удалось выполнить пинг"
	
	else
		 # Если пинг успешен, сбрасываем счетчик неудачных пингов
        	failed_ping_count=0
		#проверяем превышение времени пинга больше 100 мс
		if (( $(echo "$ping_time > 100" | bc -l) )); then
			echo "Время пинга ($ping_time ms) превышает 100 мс"
		fi
	fi

	#Если три подряд пинга неудачны, то выводим сообщение и сбрасываем счетчик
	if [ "$failed_ping_count" -ge 3 ]; then
		echo "Не удалось выполнить пинг три раза подряд"
		failed_ping_count=0
	fi
	sleep 1
done

