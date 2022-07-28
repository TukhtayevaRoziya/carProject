const express = require('express')
const router = express.Router()
const {AdminCreate} = require('../controller/auth')
// const isAuth = require('../middleware/isAuth')





router.post('/add', AdminCreate.add)
router.post('/login', AdminCreate.login)
router.get('/all', AdminCreate.getAll)
router.get('/:id', AdminCreate.getById)
router.put('/:id', AdminCreate.updateOne)
router.delete('/:id', AdminCreate.deleteOne)


module.exports = router