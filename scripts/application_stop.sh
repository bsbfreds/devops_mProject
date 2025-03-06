#!/bin/bash

echo "Stopping any existing node servers"

pkill -u ec2-user -f node
