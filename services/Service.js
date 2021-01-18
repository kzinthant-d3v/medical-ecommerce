const mongoose = require('mongoose');
const Company = require('./model/Company');
const Category = require('./model/Category');
const Subcategory = require('./model/Subcategory');
const Product = require('./model/Product');

mongoose.connect(
  'mongodb+srv://kzinthant:u8Z6RBhreGmLb93F@cluster0.ss9il.mongodb.net/medtest?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {});

async function createCompany(name) {
  return await new Company({ name }).save();
}
async function getCompany() {
  return await Company.find({});
}
async function createCategory(name) {
  return await new Category({ name }).save();
}

async function getCategory() {
  return await Category.find({});
}
async function createSubcategory(name) {
  return await new Subcategory({ name }).save();
}
async function getSubcategory() {
  return await Subcategory.find({});
}

async function createProduct(
  name,
  chemicalName,
  photo,
  pricePerItem,
  discountPrice,
  companyId,
  categories,
  subcategory
) {
  try {
    return await new Product({
      name,
      chemicalName,
      photo,
      pricePerItem,
      discountPrice,
      companyId,
      categories,
      subcategory,
    }).save();
  } catch (e) {
    console.log(e);
  }
}

async function findProductByName(name) {
  return await Product.findOne({
    name: new RegExp(name, 'i'),
  }).exec();
}

async function findProductsByCategory(categoryId) {
  return await Product.find({
    categories: categoryId,
  })
    .populate('companyId', 'name')
    .populate('subcategory', 'name')
    .populate({
      path: 'categories',
      select: 'name -_id',
    })
    .exec();
}

module.exports = { createCompany,
  getCompany,
  createCategory,
  getCategory,
  createSubcategory,
  getSubcategory,
  createProduct,
  findProductByName,
  findProductsByCategory}