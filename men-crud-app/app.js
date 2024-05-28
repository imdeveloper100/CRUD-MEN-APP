const express = require("express");
const { default: mongoose } = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.routes.js")
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({extended: false}));
// Routes
app.use("/api/products", productRoute);


// GET all users
app.get("/", (req, res) => {
  res.send("Hello World");
  console.log("Hello Console");
});






// POST products .create() method
// app.post("/api/products", async (req, res) => {
//   try {
//     const product = await Product.create(req.body);
//     res.status(200).json(product);
//   } catch (error) {
//     console.log(500).json({message: error.message})
//   }
// })


// Mongodb connection string for connecting to the database
mongoose
  .connect(
    "mongodb+srv://imdeveloper100:CXN6S50rSt04JjVH@backenddb.ytnzbqz.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backendDB"
  )
  .then(() => {
    console.log("Connected to the database");
    // Start the server
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch(() => {
    console.log("Connection Failed");
  });
