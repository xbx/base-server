#!/bin/bash

cp -r /build-dir/node_modules/ /usr/src/app/

exec npm start
