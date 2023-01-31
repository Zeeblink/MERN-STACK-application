const asyncHandler = require('express-async-handler')
const [Goal] = require('../models/models')


const getGoal = asyncHandler(
    async(req,res) => {
        const goal = await Goal.find()
        res.status(200).json(goal)
    }
)

const createGoal = asyncHandler(
    async (req,res) => {
        if(!req.body.text){
            res.status(400)
            throw new Error("there's is an error")
        }
        const newGoal = await Goal.create({
            text: req.body.text
        });
        newGoal.save((error) => {
            if(error){
                console.log(error)
            }
            res.send(`Goal created successfully:
            ${newGoal}`)
        })  
    }
)

const updateGoal = asyncHandler(
    async (req,res) => {
        const updatedGoal = await Goal.findByIdAndUpdate(req.params.id,
            {text: req.body.text}, {new: true});
            
            res.send(`Goal with the id of ${req.params.id} has been updated successfully:
            ${updatedGoal}`)
    }
)

const deleteGoal = asyncHandler(
    async (error,req,res) => {
        await Goal.findByIdAndDelete(req.params.id)
        if(error){
            console.log(error)
        }
        else{
            res.send(`Goal with the id of ${req.params.id} has been deleted successfully`)
        }
    }
)


module.exports = {
    createGoal,
    getGoal,
    updateGoal,
    deleteGoal
}