#!/bin/bash

# Директории
DIR1="/opt/100624-wdm/Volodymyr/dir1"
DIR2="/opt/100624-wdm/Volodymyr/dir2"


# Проход по всем файлам в DIR1
for file in "$DIR1"/*; do
  # Извлечение имени файла
filename=$(basename "$file")

  # Проверка, является ли имя файла числом
  if [[ "$filename" =~ ^[0-9]+$ ]]; then
    # Проверка четности
    if (( filename % 2 == 0 )); then
      # Перенос в DIR2, если число четное
      mv "$file" "$DIR2/"
      echo "Перемещено: $filename"
    fi
  fi
done
