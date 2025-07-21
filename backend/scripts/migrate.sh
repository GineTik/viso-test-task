#!/bin/bash
set -e

GENERATED_PATH="./src/shared/prisma/generated"
SCHEMA_PATH="./src/shared/prisma/schema.prisma"

if [ -d "$GENERATED_PATH" ]; then
  echo "Removing existing Prisma generated client at $GENERATED_PATH..."
  rm -rf "$GENERATED_PATH"
  echo "Prisma generated client removed."
else
  echo "Prisma generated client not found, skipping removal."
fi

npx prisma migrate dev --schema="$SCHEMA_PATH"

