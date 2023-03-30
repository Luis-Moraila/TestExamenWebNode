const express = require('express')
const app = express();
const port =3000;
app.use(express.json());

const mysql = require('mysql');

var con =mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "example",
    database: "Carros"
});

con.connect(function (err){
    if (err) throw err;
    console.log("Connected");
});



app.get('/carros', (req,res) => {
    con.query("Select * from Carros",
        function(err,result){
            if(err){
                throw err;
            }
            res.status(200).json(result);
        }
    );
});


app.get('/carros/:id', (req,res)=>{
    let id=req.params.id ?? 0;
    con.query("Select * from Carros where id=?", [id],
    function(err,result){
        if(err){
            throw err;
        }
        if(!!result && result.length>0){
            res.status(200).json(result);
        } else {
            res.status(400).json({});
        }

    });
} );


app.post('/carros', (req,res)=>{
    const marca=req.body.marca;
    const nombre=req.body.nombre;

    
    let sql="Insert into Carros (marca,nombre) Values (?,?)"
    con.query(sql,[marca,nombre],(err,result) =>{
        if(err){
            throw err;
        } else {
            res.status(200).json({});
        }
    });
} );




app.listen(port,() => {
    console.log(`Example app listening on port ${port}`);
});

