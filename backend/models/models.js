const mongoose = require('mongoose')

const goalSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Pls add a text']
    }
},
{
    timestamps:true
})

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: (value) => {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
            },
            message: 'Pls enter an valid email address'
        }
    }
})

module.exports = [
    mongoose.model('Goal', goalSchema),
    mongoose.model('User', userSchema)
]