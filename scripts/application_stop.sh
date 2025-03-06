#!/bin/bash

echo "Stopping any existing node servers"

sudo pkill -u ec2-user -f node
