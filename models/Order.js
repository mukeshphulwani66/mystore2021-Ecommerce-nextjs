import mongoose from 'mongoose'
import { truncate } from 'fs';
const {ObjectId} = mongoose.Schema.Types

const orderSchema  = new mongoose.Schema({
    user:{
        type:ObjectId,
        ref:"User"
    },
    products:[
        {
            quantity:{type:Number,default:1},
            product:{type:ObjectId,ref:"product"}
       }
    ],
    email:{
        type:String,
        required:true
    },
    total:{
        type:Number,
        required:true
    }
},{
    timestamps:true
})


export default mongoose.models.Order || mongoose.model("Order",orderSchema)