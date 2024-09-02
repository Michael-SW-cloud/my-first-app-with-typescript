#!/bin/bash


# Name of the container to be stopped
CONTAINER_NAME="eager_allen"

# Check if the container is running
if [ "$(docker ps -q -f name=$CONTAINER_NAME)" ]; then
# Container is running, so stop it
    echo "Stopping container $CONTAINER_NAME..."
    docker stop $CONTAINER_NAME
    if [ $? -eq 0 ]; then
        echo "Container $CONTAINER_NAME was successfully stopped."
    else
        echo "Error stopping container $CONTAINER_NAME."
    fi
else
    echo "Container $CONTAINER_NAME is not running or does not exist."
fi

