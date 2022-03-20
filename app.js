const express = require('express');
const app = express();
const { default: mongoose } = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');


// Middlewares
app.use(cors());
app.use(bodyParser.json());

//Import Routes
const productsRoute = require('./routes/products');
const postsRoute = require('./routes/posts');

app.use('/products', productsRoute);
app.use('/posts', postsRoute);

app.get('/', (req, res) => {
  res.send("We are on home");
})
const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://testuser:<password>@cluster0.s88qi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1}, () => console.log('Connected to Mlab Cloud'))

app.listen(3000);