#!/bin/sh
echo "Running snt-web pre-push checks. Run git push with --no-verify flag to bypass."
jest --env=jsdom
