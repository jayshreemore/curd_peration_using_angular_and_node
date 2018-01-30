const express=require('express');
const router = express.Router();
var mysql = require('mysql');

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "jayshree"
});
router.get('/contacts',(req,res,next)=>{
//db.connect(function(err) {
 // if (err) throw err;
  db.query("SELECT * FROM task", function (err, result, fields) {
    res.json(result);
 // });
});
});

   router.post('/add', function (req, res) {
    var postData  = req.body;
    console.log(req.body);
    
    db.query('INSERT INTO task SET ?', postData, function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
     });
     
 });
 
 router.put('/update', function (req, res) {
   var id = req.body.editId;
   var status = req.body.editStatus;
   var title = req.body.editTitle;
   var sql = "UPDATE `task` SET `Id`='"+id+"',`Status`='"+status+"',`Title`='"+title+"' where `Id`="+ id;
   console.log(sql);
   
  db.query(sql, function (error, results, fields) {
  if (error) throw error;
  res.end(JSON.stringify(results));
});
});


/*router.delete('/del:id',(req,res,next)=>{
    //delete logic
    db.connect(function(err) {
        if (err) throw err;
        var sql = "DELETE FROM task WHERE Id = '2'";
        db.query(sql, function (err, result) {
          if (err) throw err;
          var a = {"status":"200"};
          res.json(a);
          console.log("Number of records deleted: " + result.affectedRows);
        });
      });
});*/
router.delete('/delete/:Id', function (req, res) {
    console.log(req.params.id);
    id=req.params.Id

    var query = db.query('DELETE FROM `task` WHERE `Id`='+id, [req.body.id], function (error, results, fields) {
    if (error) throw error;
    res.json('Record has been deleted!');
  });
  console.log(query.sql);
 });

module.exports=router;