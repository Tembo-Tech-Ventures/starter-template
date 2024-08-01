#!/bin/bash

# Check if running in CodeSpaces
if [ "$CODESPACES" = "true" ]; then
    export NEXTAUTH_URL="https://$CODESPACE_NAME-3000.$GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN"
else
    export NEXTAUTH_URL="http://localhost:3000"
fi

# Run the development server
npm run dev-server