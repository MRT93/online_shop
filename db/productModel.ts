import mongoose from "mongoose";
import User from "./userModel";

const productSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        unique:true
    },
    price: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    image_full: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    favorite_count: {
        type: Number,
        required: true
    },
    purchase_count: {
        type: Number,
        required: true
    },
    category: [{type: String}],
    numbers_in_stock: {
        type: Number,
        required: true
    },
    comments: [{
        content: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true



        }

    }]


}, {timestamps: true})


export interface ProductType {
    _id: string;
    title: string;
    price: string;
    image: string;
    image_full: string;
    details: string;
    numbers_in_stock: number;
    comments : Array<{
        author:string;
        date:string;
        content:string;
    }>
}


// I was getting an error which was saying that you're re-creating model, so I find below solution from stack overflow
export default mongoose.models.Product || mongoose.model('Product', productSchema);



