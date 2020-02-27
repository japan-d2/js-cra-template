#!/bin/bash

SCRIPT_DIR="$(cd $(dirname "$0"); pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"

TEMP_DIR="$(mktemp -d)"
APP_DIR="$TEMP_DIR/app"

: "${CI:=true}"

export CI

echo "create: $TEMP_DIR"

yarn create react-app "$APP_DIR" --template "file:$PROJECT_DIR"

RETURN_VALUE=$?

if [[ $RETURN_VALUE != 0 ]]; then
  exit $RETURN_VALUE
fi

cd "$APP_DIR"

yarn lint

RETURN_VALUE=$?

if [[ $RETURN_VALUE != 0 ]]; then
  exit $RETURN_VALUE
fi

yarn test

RETURN_VALUE=$?

echo "delete: $TEMP_DIR"

rm -rf "$TEMP_DIR"

exit $RETURN_VALUE
