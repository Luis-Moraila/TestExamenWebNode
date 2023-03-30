const express = require('express')
const app = express();
const port =3000;
app.use(express.json());

const mysql = require('mysql');

var con =mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "example",
    database: "examen"
});

con.connect(function (err){
    if (err) throw err;
    console.log("Connected");
});



app.get('/todo', (req,res) => {
    con.query("Select * from Carros",
        function(err,result){
            if(err){
                throw err;
            }
            res.status(200).json(result);
        }
    );
});




app.listen(port,() => {
    console.log(`Example app listening on port ${port}`);
});

