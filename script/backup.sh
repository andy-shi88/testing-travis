cd /home/ubuntu/travis/testing-travis 
zip -qr "../archive-$(date +"%Y-%m-%d").zip" ./*
rm -rf ./*