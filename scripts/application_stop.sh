#!/bin/bash
echo "Stopping existing Node.js server..."

# Find Node.js process owned by ec2-user
PID=$(pgrep -u ec2-user -f server.js)

if [ -n "$PID" ]; then
    echo "Killing Node.js process with PID: $PID"
    sudo kill -9 $PID
else
    echo "No Node.js process found. Skipping stop step."
fi
