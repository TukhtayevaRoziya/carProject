const Xaridor = require('../models/olganlar')

exports.add =async (req, res)=>{
    try {
        const iyu = new Xaridor({
            ismizuz : req.body.ismizuz,
            ismizru: req.body.ismizru,
            data: req.body.data,
            photo:`/public/image/${req.body.file}`,
        })
         iyu.save()
        res.status(200).json({data: iyu})
    } catch (e) {
        console.log("err", e)
    }
}

exports.one = async(req, res)=>{
    try {
        const getId = await Xaridor.findById({_id: req.params.id})
        res.status(200).json(getId)
    } catch (e) {
        console.log(e, "err")
    }
}

exports.all = async(req, res)=>{
    try {
        const fj = await Xaridor.find({})
        .limit(4)
        .sort({date: -1})
        res.status(200).json(fj)
    } catch (e) {
        console.log(e, 'er')
    }
}

exports.updat = async(req, res)=>{
    try {
        const fj = await Xaridor.findByIdAndUpdate({_id: req.params.id})
        fj.ismizuz = req.body.ismizuz
        fj.ismizru = req.body.ismizuz
        fj.data = req.body.data
        fj.photo = `/public/image/${req.file.filename}`,
        res.status(200).json(fj)
    } catch (e) {
        console.log(e, 'er')
    }
}

exports.delet = async(req, res)=>{
    try {
        const fj = await Xaridor.findByIdAndDelete({_id: req.params.id})
        res.status(200).json(fj)
    } catch (e) {
        console.log(e, 'er')
    }
}