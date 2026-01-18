#!/bin/sh

## build package
npm install
npm audit fix
BASE_PATH=$BASE_PATH npm run build

## run nginx
exec nginx -g "daemon off;"