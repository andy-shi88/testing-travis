cd /home/ubuntu/travis/testing-travis/build 
zip -qr "../archive-$(date +"%Y-%m-%d").zip" ./*
rm -rf ./*