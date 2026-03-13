const express = require('express');

const app = express();

const { PORT }  =    require('./config/server.js');


const {apiRouter} = require('./routes/apiRouter.js');
 
app.use('/api', apiRouter);


 


app.listen(PORT, ()=> {
    
    console.log(`server is running at http://localhost:${PORT}`);
});