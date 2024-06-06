const express = require("express")
const path = require('path')
const app = express()

app.use(express.urlencoded({ extended: true}))

app.use(express.static(path.join(__dirname, 'views'))); // Serve HTML files from views
app.use('/scripts', express.static(path.join(__dirname, 'scripts')));

const userRouter = require('./routes/user')
app.use('/users', userRouter)


const server_port = process.env.SERVER_PORT || 3000; 
app.listen(server_port, () => { 
    console.log("APP RUNNING ON PORT " + server_port); 
});

