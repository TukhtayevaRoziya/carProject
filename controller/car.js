const Mowina = require('../models/carInfo')

exports.add =async (req, res)=>{
    try {
        const iyu = new Mowina({
            madel : req.body.madel,
            marka: req.body.marka,
            color: req.body.color,
            yili: req.body.yili,
            divigitel: req.body.divigitel,
            yoqilgi: req.body.yoqilgi,
            transmission: req.body.transmission,
            kuzuv: req.body.kuzuv,
            perevod: req.body.perevod,
            yurgani: req.body.yurgani,
            narxi: req.body.narxi,
            photo:`/public/image/${req.file}`,
            aksiya: req.body.aksiya,
            opisaniya: req.body.opisaniya,
        })
         iyu.save()
        res.status(200).json({data: iyu})
    } catch (e) {
        console.log("err", e)
    }
}

exports.one = async(req, res)=>{
    try {
        const getId = await Mowina.findById({_id: req.params.id})
        res.status(200).json(getId)
    } catch (e) {
        console.log(e, "err")
    }
}
exports.all = async(req, res)=>{
    try {
        const fj = await Mowina.find({})
        .limit(8)
        .populate('transmission')
        .sort({date: -1})
        res.status(200).json(fj)
    } catch (e) {
        console.log(e, 'er')
    }
}
exports.renew = async(req, res)=>{
    try {
        const fk = await Mowina.findByIdAndUpdate({_id: req.params.id})
        fk.madel = req.body.madel
        fk.marka = req.body.marka
        fk.color = req.body.color
        fk.yili = req.body.yili
        fk.divigitel = req.body.divigitel
        fk.yoqilgi = req.body.yoqilgi
        fk.transmission = req.body.transmission
        fk.kuzuv = req.body.kuzuv
        fk.perevod = req.body.perevod
        fk.yurgani = req.body.yurgani
        fk.narxi = req.body.narxi
        fk.photo = `/public/image/${req.file.filename}`
        res.status(200).json(fk)
    } catch (e) {
        console.log(e, "err")
    }
}
exports.delet = async(req, res)=>{
    try {
        const l = await Mowina.findByIdAndDelete({_id: req.params.id})
        res.status(200).json(l)
    } catch (e) {
        console.log(e, "err")
    }
}
// Order
exports.postt=  (req, res)=>{
    try {
        const iyu = new Mowina({
            ismiz : req.body.ismiz,
            gmail: req.body.gmail
        })
         iyu.save()
        res.status(200).json({data: iyu})
    } catch (e) {
        console.log("err", e)
    }
}
exports.single = async(req, res)=>{
    try {
        const getId = await Mowina.findById({_id: req.params.id})
        res.status(200).json(getId)
    } catch (e) {
        console.log(e, "err")
    }
}
exports.whole= async(req, res)=>{
    try {
        const fj = await Mowina.find({})
        .sort({date: -1})
        res.status(200).json(fj)
    } catch (e) {
        console.log(e, 'er')
    }
}
exports.neww = async(req, res)=>{
    try {
        const fk = await Mowina.findByIdAndUpdate({_id: req.params.id})
        fk.ismiz = req.body.ismiz
        fk.gmail = req.body.gmail
        res.status(200).json(fk)
    } catch (e) {
        console.log(e, "err")
    }
}
exports.remove= async(req, res)=>{
    try {
        const l = await Mowina.findByIdAndDelete({_id: req.params.id})
        res.status(200).json(l)
    } catch (e) {
        console.log(e, "err")
    }
}

