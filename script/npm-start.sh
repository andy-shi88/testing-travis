cd /home/ubuntu/travis/testing-travis
npm run build
pm2 kill
pm2 start ./app.config.json