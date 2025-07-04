#!/bin/sh

## build package and run nginx
BASE_PATH=$BASE_PATH npm run build
exec nginx -g "daemon off;"