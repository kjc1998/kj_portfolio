#!/bin/sh

## build package and run nginx
npm run build
exec nginx -g "daemon off;"