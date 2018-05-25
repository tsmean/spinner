#!/usr/bin/env bash

ng build @tsmean/spinner --prod
cp README.md dist/tsmean/spinner
cd dist/tsmean/spinner
npm publish --tag next
