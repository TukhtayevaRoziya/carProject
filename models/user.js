const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        
    },
    gmail: {
        type: String, 
        
    },
    password :{
        type: String,
        
    },
    roles: {
        type: String,
        enum: ["admin", "user"],
        default: "user"
    },
    date: {type: Date, default: Date.now()}
})
module.exports = mongoose.model('user', userSchema)