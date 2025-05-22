require('dotenv').config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require('cors');
const userRoutes = require("./routes/userRoutes")
const fabricRoutes = require("./routes/fabricRoutes");


const app = express();
connectDB();

app.use(express.json());
app.use(cors({
    origin: '*', // or restrict to your frontend domain
    methods: ['GET', 'POST'],
    credentials: true
  }));

process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
    process.exit(1);
  });
  
  process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection:', reason);
    process.exit(1);
  });
  

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Sever is running on port ${PORT}`))

app.use('/api/users', userRoutes)

app.use('/api/fabrics', fabricRoutes)


