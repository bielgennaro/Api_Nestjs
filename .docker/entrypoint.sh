#!/bin/sh

npm install
npm run build
npx typeorm migration:run -d src/database.providers.ts
npm run start