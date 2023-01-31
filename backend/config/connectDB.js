
const mongoose = require('mongoose')

const connectDB = () => {
    try {
        mongoose.set('strictQuery', true)
        const connect = mongoose.connect(process.env.mongoDBauth)
        console.log(`MongoDB connected`)

    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB