npm install express 

npm install mysql

docker pull mariadb
docker pull adminer

docker run --detach --name mariadb --env MARIADB_USER=example --env MARIADB_PASSWORD=example --env MARIADB_ROOT_PASSWORD=example -p 3306:3306 mariadb:latest

docker run --link mariadb:db -p 8080:8080 adminer

``

usuario del profe: jorgempitc


  git config --global user.email "you@example.com"
  git config --global user.name "Your Name"

git clone url
git add .
git commit -m 'Mensaje'
git push

