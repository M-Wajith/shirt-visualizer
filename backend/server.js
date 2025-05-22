require('dotenv').config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require('cors');
const userRoutes = require("./routes/userRoutes")
const fabricRoutes = require("./routes/fabricRoutes");


const app = express();
connectDB();

app.use(express.json());
app.use(cors());



const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Sever is running on port ${PORT}`))

app.use('/api/users', userRoutes)

app.use('/api/fabrics', fabricRoutes)


process.on('unhandledRejection', err => {
    console.error('Unhandled promise rejection:', err);
    process.exit(1);
  });
  