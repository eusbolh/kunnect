#!/bin/bash

npm run build # Build the project
ssh eusbolh@142.93.109.214 'cd /var/www/html; sudo rm -rf ./*;'
scp -r ~/Desktop/kunnect/dev/kunnect/build/* root@142.93.109.214:/var/www/html