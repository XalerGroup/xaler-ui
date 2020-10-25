#!/usr/bin/env bash

case $1 in
  start)
    # The '| cat' is to trick Node that this is an non-TTY terminal
    # then react-scripts won't clear the console.
    yarn serve | cat
    ;;
  build)
    npm run build
    ;;
  test)
    npm run test "$@"
    ;;
  *)
    npm run "$@"
    ;;
esac
