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
    toUpdate: async (req, res) =>{
        res.sendFile(path.join(__dirname, '..', 'views', 'updateUser.html'))
    },
    delete: async (req, res) =>{
        try {
            const { id } = req.params;
            await deleteUser(id);
            res.json({ success: true });
        } catch (error) {
            console.error("Error deleting user:", error);
            res.status(500).json({ success: false, message: "Internal Server Error" });
        }
    },
    put: async (req, res) => {
        try {
            const { id } = req.params;
            const { firstname, lastname } = req.body; // Extract firstname and lastname from request body
            await updateUser(id, firstname, lastname);
            res.json({ success: true });

        } catch (error) {
            console.error("Error deleting user:", error);
            res.status(500).json({ success: false, message: "Internal Server Error" });
        }
    },
}