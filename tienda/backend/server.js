const express = require("express");
mongoose = require('mongoose');
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./app/models");

const rutaProductos = require('./rutas/productos.rutas')

mongoose.Promise = global.Promise;



//Connect Method

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,    
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });





const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));






// Ruta api de productos productos

app.use('/api', rutaProductos)




// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


// Error Handling
app.use((req, res, next) => {
  next(createError(404));
});



app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
