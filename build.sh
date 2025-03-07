#!/usr/bin/env bash
# Скрипт для сборки проекта на Render

# Выход при ошибке
set -o errexit

# Установка зависимостей Python
pip install -r requirements.txt

# Сбор статических файлов
python manage.py collectstatic --no-input

# Применение миграций
python manage.py migrate 