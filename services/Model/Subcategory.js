let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let SubcategorySchema = new Schema({
    name: String
})

let subcategory;
try {
    subcategory = mongoose.model('Subcategory');
}
catch(e){
    subcategory = mongoose.model('Subcategory', SubcategorySchema);
}
module.exports = subcategory;
