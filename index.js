const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;
const {errorHandler} = require('./backend/middlewares/errorMiddleware')
const connectDB = require('./backend/config/connectDB')


connectDB()
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/goals', require('./backend/routes/goalRoutes'))
app.use(errorHandler)

app.listen(PORT, console.log(`Server started at ${PORT}`))