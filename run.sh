git pull origin master
npm run build
docker container rm -f frontend
docker image build -t frontend .
docker container run -d --name frontend -p 80:80 -v $(pwd)/nginx.conf:/etc/nginx/nginx.conf frontend
