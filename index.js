const express = require('express');
const app = express();


app.get('/',(req,res) =>{
res.send('Hello World');

});
app.get('/id',(req,res) =>{
    res.send([1,2,3,4]);
    
    });
app.get('/api/:id/:key',(req,res) =>{
        //res.send(req.params.id); //single param
        res.send(req.params);
        });
const port = process.env.PORT || 3000;
app.listen(3000,()=> console.log(`Listening on port ${port}`))
