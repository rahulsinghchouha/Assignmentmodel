const mongoose = require("mongoose");


//define schema

const productDiscountSchema = new mongoose.Schema({

    id:{
        type:Number,
        required:true
    },
    
    name:{
        type:String,
        required:true
    },
    desc:{
        type:Number,
        required:true,
    },
    discount_percent:{
        type:Number,
        required:true,
    },
    active:{
        type:Boolean,
        required:true,
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
	},
    
},
{ timestamps: true }
);
// Export the Tags model
module.exports = mongoose.model("ProductDiscount", productDiscountSchema);
