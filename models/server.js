const express = require('express')
const cors = require('cors')
const db = require("../db/connection")
const asociations = require("../models/asociations")

class Server {

    constructor(){
        this.app = express()

        this.dbConnection()

        this.middlewares()

        this.routes()
        
    }


    async dbConnection(){
        try{
                await db.sync({force: false})
                console.log('DB ONLINE ')
        }catch(error) {
                throw new Error(error)
        }
   
    }

    middlewares(){
        this.app.use(cors())
    }


    routes(){
        this.app.use('/category', require('../routes/category'))
        this.app.use('/products', require('../routes/product'))
    }

    listen(){
        this.app.listen(process.env.PORT, ()=> {
            console.log('Server running on PORT:',process.env.PORT)
        })
    }

}

module.exports = Server;