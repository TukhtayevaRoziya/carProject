const mongoose = require('mongoose')

const xaridorSchema = mongoose.Schema({
    ismizuz: {
        type: String,
        required: true
    },
    ismizru: {
        type: String,
        required: true
    },
    data: String,
    photo: {
        type: String,
        required: true
    },
    date: { type: Date, default: Date.now }
})
module.exports = mongoose.model("Olganlar", xaridorSchema)