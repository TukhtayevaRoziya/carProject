const express = require('express')
const router = express.Router()
const md5 = require('md5')
const multer = require('multer')
const path = require('path')
const {add, one, all, updat, delet } = require('../controller/Olganlar')


const storage = multer.diskStorage({
    destination: function (req,file,cb) {
        cb(null, './public/image');
    },
    filename: function (req,file,cb) {
        cb(null, `${md5(Date.now())}${path.extname(file.originalname)}`);
    }
});
const upload = multer({storage: storage});

router.post('/add', upload.single('photo'), add)
router.get('/all', all)
router.get('/:id', one)
router.put('/:id', updat)
router.delete('/:id', delet)



module.exports = router