const express = require('express')
const app = express()
const mongoose = require("mongoose")
const bodypar = require('body-parser')
app.use(bodypar.json())
app.use(bodypar.urlencoded({extended: false}))

const cors = require("cors")
app.use(cors())

//---------------------------------------------- MongoDB ------------------------------------------------
const MongoURI = "mongodb://localhost:27017/avtosalon"
mongoose
    .connect(MongoURI, {
        useNewUrlParser: true
    })
    .then((res) => {
        console.log(`Database Connected`);
    })

// Mowina 




app.use('/', require('./router/car'))
app.use('/client', require('./router/xaridRoutes'))
app.use('/admin', require('./router/authRoutes'))



app.listen(3001, console.log("run server 3001 port"))
