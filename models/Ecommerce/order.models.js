import mongoose from "mongoose";

const orderItemSchema=new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    quantity:{
        type:Number,
        required:true
    }
});
const addressSchema=new mongoose.Schema({
    cityname:String,
    pincode:Number,
    state:String
});
const orderSchema=new mongoose.Schema({
    orderPrice:{
        type:Number,
        required:true

    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    orderItems:{
        type:[orderItemSchema],
        // required:true
    },
    address:{
        type:addressSchema,
        required:true
    },
    status:{
        type:String,
        enum:["PENDING","DELIVERED","CANCELLED"],
        default:"PENDING"
    }

},
    {timestamps:true});

export const Order=mongoose.model("Order",orderSchema);