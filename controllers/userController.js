const path = require('path')
const {getData, createUser, updateUser, deleteUser} = require('../model/database')

module.exports = {
    get: (req, res) =>{
        res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
    },
    loadTable: async (req, res) =>{
        const users = await getData()
        res.json(users)
    },
    post: async (req, res) =>{
        const {firstname, lastname} = req.body
        try{
            await createUser(firstname,lastname)
            res.redirect("/users")
        }catch (error){
            console.error("Error adding new user", error)
        }
    },
    update: async (req, res) =>{
        const {id, firstname, lastname} = req.body
        try{
            await updateUser(id, firstname, lastname)
            res.redirect("/users")
        }catch (error){
            console.error("Error adding new user", error)
        }
    },
    detele: async (req, res) =>{
        const {id} = req.body
        try{
            await deleteUser(id)
            res.redirect("/users")
        }catch (error){
            console.error("Error adding new user", error)
        }
    }
}