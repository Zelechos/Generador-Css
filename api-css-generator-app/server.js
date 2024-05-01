require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const cors = require('cors');
app.use(cors());

console.log("bd => ", process.env.BD_URL)
mongoose.connect(process.env.BD_URL)

const db = mongoose.connection;
db.on('error', (error) => console.error("NO se conecto la BD"))
db.once("open", ()=> console.log("Connect to DataBase"))

app.use(express.json())
    
const viewRouter = require('./routes/views')
app.use("/views", viewRouter)

const userRouter = require('./routes/users')
app.use("/users", userRouter)

app.listen(3000, ()=>{
    console.log("Server Starter");
})