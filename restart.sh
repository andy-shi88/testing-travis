cd /home/andy/serverless/product-app-client && rm -rf node_modules && npm install && npm run build && pm2 kill && pm2 start ./app.config.json