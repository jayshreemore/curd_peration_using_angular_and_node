/*const express = require('express');

const mysql = require('mysql');

///db connectiion
const db = mysql.createConnection({

host  : 'localhost',
user  :'root',
password: 'root',
database:'jayshree'

});
//connect
db.connect((err)=>{
if(err){
    throw err;
}
console.log('mysql Connect');

});
const app = express();
/*app.get('/createdb',(req,res)=>{

    let sql = 'create database nodemysql1';
    db.query(sql,(err,result)=>{
        if(err)throw err;
        res.send('created database');
    });
});*/
//Insert post 1
/*app.get('/addpost1',(req,res)=>{
let task={Id:'6',Title:'node',Status:'insert'};
let sql ='insert into task  SET?';
let query = db.query(sql,task,(err,result)=>{

 if(err)throw err;
        res.send('value post');
});


});
app.listen('3000',()=>{

    console.log('Server started on port 3000 hello');
});*/

/////////////////////////////////////////////////////////////////////////////////////////////////


var express = require('express');  
var path = require('path');  
var bodyParser = require('body-parser');  
var cors = require('cors'); 
var mysql = require('mysql'); 
var app = express(); 
const db = mysql.createConnection({

    host  : 'localhost',
    user  :'root',
    password: 'root',
    database:'jayshree'
    
    });
    //connect
    db.connect((err)=>{
    if(err){
        throw err;
    }
    console.log('mysql Connect');
    
    });
const route=require('./routes/route'); 
///middale where -cors

app.use(cors());
app.use(bodyParser.json());
app.use('/api',route);

//static file
app.use(express.static(path.join(__dirname, 'public'))); 


app.get('/',(req,res)=>{
    res.send('hello');
    
    
});
app.listen('3000',()=>{

    console.log('Server started on port 3000 hello');
});