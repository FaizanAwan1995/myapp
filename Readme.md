# Demyst Loan Application code 
 React was used as frontend (client) and backend using node/express JS

# Frontend
react app in \client\src\App.js


# Backend API services are divided in to 3 Micro Services
1. mainServer                backend\mainServer              index.js
2. accountingSoftware        backend\accountingSoftware      accountingSoftware.js
3. decisionEngine            backend\decisionEngine          decisionEngine

Backend also has sample Accounting sheet accountingData.json that is retrived by accountingSoftware as per the simulation


# Ports:
Frontend/Client runs on - localhost:3000
mainServer e API runs on - localhost:5000
accountingSoftware API runs on - localhost:5007
decisionEngine API runs on - localhost:5054


# To run Locally

Client
cd .\client\
npm run start


Backend:
From root to run mainServer
cd .\backend\mainServer
npm install
node .\index.js\


From root to run accountingSoftware
cd .\backend\accountingSoftware
npm install
node .\accountingSoftware.js\

From root to run decisionSoftware
cd .\backend\decisionSoftware
npm install
node .\decisionSoftware.js\



# Folder structure:

├── backend
│   ├── mainServer                      // to receive calls from frontend and communicate with thirdparty apps
│   ├── accountingSoftware              // to return accountingData i.e. Accounting sheet
│   ├── decisionSoftware                // to business logic
│   
└── frontend
    ├── public
    └── src
    
 # Testing:
 node repo deprication identified using
 
 npx start-test 'http-server -c-1 .' 5000 'cypress run'
 
1: starting server using command "http-server -c-1 ."
and when url "[ 'http://localhost:5000' ]" is responding with HTTP status code 200
running tests using command "cypress run"

Starting up http-server, serving .

http-server version: 14.1.1
http-server settings: 
CORS: disabled
Cache: -1 seconds
Connection Timeout: 120 seconds
Directory Listings: visible
AutoIndex: visible
Serve GZIP Files: false
Serve Brotli Files: false
Default File Extension: none

Available on:
  http://10.6.12.2:8080
  http://192.168.1.108:8080
  http://127.0.0.1:8080
  http://172.22.144.1:8080
Hit CTRL-C to stop the server

> [2022-09-25T01:39:47.683Z]  "GET /" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
(node:4720) [DEP0066] DeprecationWarning: OutgoingMessage.prototype._headers is deprecated
(Use `node --trace-deprecation ...` to show where the warning was created)
[2022-09-25T01:39:48.014Z]  "GET /favicon.ico" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"[2022-09-25T01:39:48.017Z]  "GET /favicon.ico" Error (404): "Not found"
[2022-09-25T01:39:57.282Z]  "GET /index.js" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
[2022-09-25T01:40:06.402Z]  "GET /" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"



More Test can be peroformed in future





