#!/bin/bash

DIRECTORY="/opt/100624-wdm"

cd "$DIRECTORY" || exit

find . -type f -name "*.sh" -exec chmod +x {} \;

echo "Права на исполнение были добавлены для файлов .sh в $DIRECTORY."
