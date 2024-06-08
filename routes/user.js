const express = require('express')
const router = express.Router()
const path = require('path')
const controller = require('../controllers/userController')
const {getData, createUser, updateUser} = require(`../model/database`)

router.get('/', controller.get)
router.get('/load', controller.loadTable)
router.post('/', controller.post)
router.get('/updateUser', controller.toUpdate)
router.put('/:id', controller.put)
router.delete('/:id', controller.delete)

module.exports = router