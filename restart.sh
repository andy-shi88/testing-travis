cd /home/ubuntu/travis/testing-travis && rm -rf node_modules && npm install && npm run build && pm2 kill && pm2 start ./app.config.json