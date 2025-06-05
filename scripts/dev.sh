#!/bin/bash
npm --prefix backend run dev &
BACK_PID=$!

npm --prefix frontend run dev &
FRONT_PID=$!

trap "kill $BACK_PID $FRONT_PID" EXIT
wait
