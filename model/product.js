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

const productSchema = new Schema({
  title: String,
  price: Number,
});

const customerSchema = new Schema({
  name: String,
  product_id: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
});

const Product = mongoose.model("Product", productSchema);

const Customer = mongoose.model("Customer", customerSchema);

export { Product, Customer };
