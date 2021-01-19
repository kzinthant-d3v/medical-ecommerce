let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let CategorySchema = new Schema({
    name: String
},{
    timestamps: {
        createdAt: 'created_at'
    }
})

let category;
try {
    category = mongoose.model('Category');
}
catch(e){
    category = mongoose.model('Category', CategorySchema);
}
module.exports = category;
