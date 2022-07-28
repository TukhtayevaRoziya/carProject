const mongoose = require('mongoose')

const carSchema = mongoose.Schema({
    madel: {
        type: String,
    },
    marka: {
        type: String,
    },
    color: {
        type: String,
    },
    yili: {
        type: Number,
    },
    divigitel:{
        type: Number,
    },
    yoqilgi: {
        type: String,
    },
    transmission: {
        type: String,
        enum: ["mexanika", "avtomat"]
    },
    kuzuv: {
        type: String,
    },
    perevod:{
        type: String,
    },
    yurgani: {
        type: String,
    },
    narxi: {
        type: String,
    },
    aksiya: String,
    opisaniya:  String,
    ismiz: {
        type: String,
    },
    gmail: {
        type: String,
    },
    photo: {
        type: String,
    },
    date: {type: Date, default: Date.now}
})
module.exports = mongoose.model("Car", carSchema)