cd frontend/burger-finder

### Docker
docker run --rm -it -p 3000:3000 $(docker build -q .)

### NPM
npm install
npm start