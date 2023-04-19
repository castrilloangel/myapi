const express = require("express");
const app = express();
const cors = require("cors");

const faker = require("faker");
const apiRouter = require("./server");
//const port = process.env.PORT // 3000
const port = 3000
// Para comprobar el commit una vez mas



//CONEXION A UNA BASE DE DATOS  en este caso a la de beereaders
// var mysql = require('mysql');
//var conexion= mysql.createConnection({
 //   host : 'beereaders-db.cu7jnzrgnclp.us-east-2.rds.amazonaws.com',
  //  port :"3306",
   // user :'root',
    //password : 'HNMz6Rayac5ML%*&wWd9mU4^',
    //database : 'ludibuk'
//})

//conexion.connect(function(err) {
  //  if (err) {
   //     console.error('Angel Error de conexion: ' + err.stack);
    //    return;
   // }
   // console.log('TU estas Conectado con el identificador ' + conexion.threadId);

    //conexion.end()
    //console.log("desconectado")

    
//});


app.use(cors())

app.get("/",(req, res)=>{
  // res.send("Hola Mundo de ANGEL desde mi ruta Raiz") //Lo que voy a ver en el localhost:3000
   res.send("Hola Mundo")
})
apiRouter(app);


app.get(`/products`,(req, res)=> {
    const products = []
    for(let index = 0;index<10;index++){
        products.push({
            name:faker.commerce.productName(),
            price:parseInt(faker.commerce.price(), 10),
            image:faker.image.imageUrl(),
        })
    }
   res.json(products)
})

 

app.get(`/products/:id`, (req, res)=> {
       
       const {id} = req.params
       
       res.json({
       "id": id,
       "name" : "Monitor",
       "Precio" :  150,
       "Modelo" : "Samsung"})

    })       
app.listen(port, (req, res)=>{
    console.log(`Escuchando por el puerto ${port}`)
})
//La req es la request ose la peticion
//La res seria la respuesta

app.get(`/help`, (req, res)=>{
    res.status(200).send("Desde la ayuda Hola ANGEL desde mi ruta Raiz") //Lo que voy a ver en el localhost:3000
 })