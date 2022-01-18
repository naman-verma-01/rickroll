const express = require('express');
const { readFile } = require('fs');
const { request } = require('http');

const app = express();

app.get('/',(req, res) => {
    readFile ('./home.html' , 'utf8' , (err, html) =>{
        if(err){
            res.status(500).send('DAMN.....looks like there was some trouble');
        }
        res.send(html);
    })
});



app.listen(process.env.port || 5000 )
