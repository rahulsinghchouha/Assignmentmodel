const mongoose = require("mongoose");

//define schema

const productSchema = new mongoose.Schema({

    id:{
        type:Number,
        required:true
    },
    
    name:{
        type:String,
        required:true
    },
    
    desc:{
        type:String,
        required:true
    },
    
    SKU:{
        type:String,
        required:true
    },
    category_id:{
        type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "ProductCategory",
    },
    inventory_id:{
        type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "ProductInventory",
    },
    price:{
        type:Number,
        required:true
    },
    discount_id:{
        type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "ProductDiscount",
    },
    created_at: {
		type: Date,
		default: Date.now,
	},
    modified_at: {
		type: Date,
		default: Date.now,
	},
    deleted_at: {
		type: Date,
		default: Date.now,
	}
},
{ timestamps: true },
);
// Export the Tags model
module.exports = mongoose.model("Product", productSchema);
