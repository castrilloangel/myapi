const express = require("express");
const app = express();
const faker = require("faker");
const router = express.Router();
//const producservices = require("../services/producservices");


router.get("/",(req, res)=> {
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

router.get(`/:id`, (req, res)=> {
       
       const {id} = req.params
              res.json({
       "id": id,
       "name" : "Monitor",
       "Precio" :  150,
       "Modelo" : "Samsung"
     })

    })   

    module.exports = router;
    