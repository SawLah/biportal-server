# biportal-server
experiment for biportal server nodejs, express, sequelize, typescript and auto generate models

If not installed yet, 
npm install -g typescript
npm install -g typings
npm install -g grunt-cli

npm install
typings install

npm run build -- to transpile .ts files to .js ones

node lib/cli.js [database-name] [username] [password] [output-path] [database-dialect] 
example --
node lib/cli.js mydb root admin app/gen mysql     -- to generate sequelize models and types in  app/gen folder 


npm start -- to build and run the app. 

TO CHECK if everything is running correctly ... 
TEST #1 - look at the console for POC Test
TEST #2  http://localhost:3000/campus/4


