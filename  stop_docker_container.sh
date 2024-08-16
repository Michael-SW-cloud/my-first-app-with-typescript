

# Name des Containers, der gestoppt werden soll
CONTAINER_NAME="great_swirles"

# Überprüfen, ob der Container läuft
if [ "$(docker ps -q -f name=$CONTAINER_NAME)" ]; then
    echo "Stoppe Container $CONTAINER_NAME..."
    docker stop $CONTAINER_NAME
    if [ $? -eq 0 ]; then
        echo "Container $CONTAINER_NAME wurde erfolgreich gestoppt."
    else
        echo "Fehler beim Stoppen des Containers $CONTAINER_NAME."
    fi
else
    echo "Container $CONTAINER_NAME läuft nicht oder existiert nicht."
fi

