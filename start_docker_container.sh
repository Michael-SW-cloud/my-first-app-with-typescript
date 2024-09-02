#!/bin/bash

# Name of the container to be started
CONTAINER_NAME="eager_allen" 

# Check if the container exists
if [ "$(docker ps -a -q -f name=$CONTAINER_NAME)" ]; then
    # Check if the container is already running
    if [ "$(docker ps -q -f name=$CONTAINER_NAME)" ]; then
        echo "Container $CONTAINER_NAME is already running."
    else
        echo "Starting container $CONTAINER_NAME..."
        docker start $CONTAINER_NAME

        if [ $? -eq 0 ]; then
            echo "Container $CONTAINER_NAME  was successfully started."
        else
            echo "Error starting container $CONTAINER_NAME."
        fi
    fi
else
    echo "Container $CONTAINER_NAME does not exist. Creating and starting the container..."
    docker run -d --name $CONTAINER_NAME my-webapp

    if [ $? -eq 0 ]; then
        echo "Container $CONTAINER_NAME was successfully created and started."
    else
        echo "Error creating and starting container $CONTAINER_NAME."
    fi
fi