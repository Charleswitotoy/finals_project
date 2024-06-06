const mysql = require('mysql2')
const dotenv = require('dotenv')

dotenv.config();

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'testdb_ejs'
})
.promise()

async function getData(){
    const [result] = await pool.query("SELECT * FROM tbl_names");
    return result;
}

async function createUser(Firstname, Lastname){
    const [result] = await pool.query("INSERT INTO `tbl_names`(`first_name`, `last_name`) VALUES (?,?)", [Firstname, Lastname]);
    return result;
}

async function updateUser(Id, Firstname, Lastname){
    const [result] = await pool.query("UPDATE `tbl_names` SET `first_name`='?',`last_name`='?' WHERE id = ?", [Firstname, Lastname, Id]);
    return result;
}

async function deleteUser(Id){
    const [result] = await pool.query("DELETE FROM `tbl_names` WHERE ?", [Id]);
    return result;
}

module.exports = {
    getData,
    createUser,
    updateUser,
    deleteUser
};