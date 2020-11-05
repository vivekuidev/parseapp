Problem Description
===================
Functionality and Design
The application must expose restful endpoints that will parse data (passed in the request body) and return the value back to the client. The API will have two versions and depending on the version endpoint, the parsing of the data will return a different value back to the client. Use TypeScript interfaces so the code assumes the design / object properties.
Endpoints
/api/v1/parse (POST)
/api/v2/parse (POST)

SetUP:
=====

1) Install nodejs
2) run npm install
3) Run node app.js
4) Test APIs with any REST client(ex: POSTMAN)
