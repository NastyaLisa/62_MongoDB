import mongoose from "mongoose";

const Schema = mongoose.Schema;

// const productSchema = new Schema({
//   title: String,
//   price: Number,
//   rating: Number,
//   category: String,
//   brand: String,

// });
// const Product = mongoose.model("product", productSchema);
// export { Product, productSchema };

// const mongoose = require("mongoose");

// Определение схемы для коллекции products
const productSchema = new mongoose.Schema({
  title: String,
  price: Number,
});

// Определение схемы для коллекции customers
const customerSchema = new mongoose.Schema({
  name: String,
  product_id: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
});

// Модель для коллекции products
export const Product = mongoose.model("Product", productSchema);

// Модель для коллекции customers
export const Customer = mongoose.model("Customer", customerSchema);

// module.exports = { Product, Customer };
