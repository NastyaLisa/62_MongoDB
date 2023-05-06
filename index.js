import express from "express";
import mongoose from "mongoose";

import { Product, Customer } from "./model/product.js";

const url = "mongodb://127.0.0.1:27017/shop";

const PORT = 8000;

const app = express();

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", async (req, res) => {
  try {
    const customers = await Customer.find().populate(
      "product_id",
      "title price"
    );
    const htmlCustomers = customers.map(
      (customer) => `
      <div style="border: 1px solid #000; 
      width: fit-content; 
      margin: 0 0 20px 0; 
      padding: 0 10px">
        <p>${customer.name}: ${customer.product_id.title} Price: ${customer.product_id.price} </p>
        
      </div>
    `
    );

    const html = `<h1>Users purchases:</h1> ${htmlCustomers.join("")}`;
    res.send(html);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});

//Lection

// async-await
//   app.get("/", async (req, res) => {
// try {
//     const products = await Product.find();
//     const htmlProducts = products.map(product =>`
//       <div style="border: 1px solid #000;
//       width: fit-content;
//       margin: 0 0 20px 0;
//       padding: 0 10px">
//        <h2>${product.title}</h2>
//        <p>Price: ${product.price}</p>
//       </div>
//        `);

//        const html = `<h1>Products:</h1> ${htmlProducts.join("")}`;
//        res.send(html);
// } catch (error) {
//     console.log(`Error: ${error.message}`);
// }
// });

// mongoose
//   .connect(url)
//   .then(() => {
//     console.log("Connected to DB");
//     app.listen(PORT, () => {
//       console.log(`Server started on http://localhost:${PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.log(`DB connection error: ${err}`);
//   });

// const connection = mongoose.createConnection(url, {maxPoolSize: 10})
// const Product = connection.model('product', productSchema);
// connection.on('open', () => {
//  console.log('Connected to the database!');
//  app.listen(PORT, ()=> {
//  console.log(`Server started on http://localhost:${PORT}`);
//  })
//  });

//  connection.on('error', (err) => {
//  console.error(`Database connection error: ${err}`);
//  });

//then-catch
//   app.get("/", (req, res) => {
//     Product.find()
//       .then((products) => {
//         const productsHtml = products.map(
//           (product) => `
//       <div style="border: 1px solid #000;
//       width: fit-content;
//       margin: 0 0 20px 0;
//       padding: 0 10px">
//        <h2>${product.title}</h2>
//        <p>Price: ${product.price}</p>
//       </div> `
//         );
//         const html = `<h1>Products:</h1> ${productsHtml.join("")}`;
//         res.send(html);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   });

// app.get("/", (req, res) => {
//   res.send("<h1>Wellcome</h1>");
// });
// app.listen(PORT, () => {
//   console.log(`Server started on http://localhost:${PORT}`);
// });
