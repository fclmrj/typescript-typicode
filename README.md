# typescript-typicode
Project that explore typescript environment configurations and also features of the api fetch

## Typescript configurations
- This project have been two properties configured in package.json : "compile": "tsc", "start": "tsc -w" for transpile *.ts archives
- This project also have two properties configured in tsconfig.json "noEmitOnError": true, "noImplicitAny": true that configure enviroment for not compile when one code error is present not accept variables without type respectively
- To apply modules execute command "npm install" on typescript-typicode directory after clone this repository

## Server configuration
- This project was configured with lite-server that provide one unique entry point for initial request "/" at server 

## Run commands
- For run this project use command "npm run start" in a terminal and with a new terminal execute the command "npm run server"
