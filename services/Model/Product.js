let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ProductSchema = new Schema({
    name: String,
    chemicalName: String,
    photo: String,
    pricePerItem: Number,
    discountPrice:[String], 
    
    companyId: {
      type: Schema.Types.ObjectId, ref: 'Company'
    },

    categories: [{type: Schema.Types.ObjectId, ref: 'Category'}],

    subcategory:{
      type: Schema.Types.ObjectId, ref: 'Subcategory'}
    
    })

    let product;
    try {
        product = mongoose.model('Product');
    }
    catch(e){
        product = mongoose.model('Product', ProductSchema);
    }
    module.exports = product;