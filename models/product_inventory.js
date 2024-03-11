const mongoose = require("mongoose");


//define schema

const productInventorySchema = new mongoose.Schema({

    id:{
        type:Number,
        required:true
    },
    
    quantity:{
        type:Number,
        required:true
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
{ timestamps: true }
);
// Export the Tags model
module.exports = mongoose.model("ProductInventory", productInventorySchema);
