const express = require('express')
const router = express.Router()
const md5 = require('md5')
const multer = require('multer')
const path = require('path')
const {add,one,all,renew,delet,postt,single, whole, neww , remove } = require('../controller/car')

const storage = multer.diskStorage({
    destination: function (req,file,cb) {
        cb(null, './public/image');
    },
    filename: function (req,file,cb) {
        cb(null, `${md5(Date.now())}${path.extname(file.originalname)}`);
    }
});
const upload = multer({storage: storage});

router.post('/Car/add', upload.single('photo'), add)
router.get('/Car/all', all)
router.get('/Car/:id', one)
router.put('/Car/:id', renew)
router.delete('/Car/:id', delet)
// Order
router.post('/order/add', postt)
router.get('/order/all', whole)
router.get('/order/:id', single)
router.put('/order/:id', neww)
router.delete('/order/:id', remove)


module.exports = router