const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use(cors());

const TodoItemRoute = require("./routes/todoItems");

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("Database connected"))
.catch(err => console.log(err))

app.use('/',TodoItemRoute);



app.listen(PORT, ()=> console.log("Server connected") );

