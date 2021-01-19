let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let CompanySchema = new Schema({
    name: String
},
{
    timestamps: {
        createdAt: 'created_at'
    }
})

let company;
try {
    company = mongoose.model('Company');
}
catch(e){
    company = mongoose.model('Company', CompanySchema);
}
module.exports = company;