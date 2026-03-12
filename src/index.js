const express = require('express');

const app = express();

const {PORT} =    require('./config/server.js');
const {homeController} = require('./controller/homeController.js');




app.get('/home', homeController);
 


app.listen(PORT, ()=> {

    console.log(`server is running at http://localhost:${PORT}`);
});