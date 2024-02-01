git clone git@github.com:MarinosTBH/nodejs_mongoose_starter.git

npm i 

create .env file with : URL=mongodb://localhost:27017/SwConsulting

npm run dev

// api
to create a superadmin :

curl -X POST http://localhost:3000/api/superadmins -H "Content-Type: application/json" -d '{
    "username": "username",
    "password": "password",
    "email": "email"
}'

to get superadmins 
curl http://localhost:3000/api/superadmins
