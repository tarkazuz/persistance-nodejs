#!/bin/sh

docker run --rm -p 5432:5432 -e POSTGRES_HOST_AUTH_METHOD=trust --name book-postgres postgres:12-alpine