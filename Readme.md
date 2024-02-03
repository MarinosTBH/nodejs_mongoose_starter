git clone git@github.com:MarinosTBH/nodejs_mongoose_starter.git

npm i 

create .env file with : URL=mongodb://localhost:27017/SwConsulting

npm run dev

// api

BASE_URL=localhost:3000/api

to create a superadmin :

curl -X POST http://localhost:3000/api/superadmins -H "Content-Type: application/json" -d '{
    "username": "username",
    "password": "password",
    "email": "email"
}'

// superadmins default route
GET     /api/superadmins
POST    /api/superadmins
UPDATE  /api/superadmins/:id
DELETE  /api/superadmins/:id


// users default route
GET 	/api/users
POST 	/api/users
UPDATE	/api/users/:id
DELETE 	/api/users/:id

// employee default route  
GET     /api/employees
POST    /api/employees
UPDATE  /api/employees/:id
DELETE  /api/employees/:id

// employee default route
GET     /api/rhs
POST    /api/rhs
UPDATE  /api/rhs/:id
DELETE  /api/rhs/:id
