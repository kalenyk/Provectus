const express = require("express"),
    app = express(),
    port = 8000,
    mongoose = require("mongoose"),
    bodyParser = require("body-parser"),
    cors = require("cors");

require("./models/tagsModel");


mongoose.Promise = global.Promise;
mongoose.connect("mongodb://admin:admin1@ds215208.mlab.com:15208/graphql");
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


const routes = require("./routes/index");
routes(app);



app.use(function (req, res) {
    res.status(404).send({url: req.originalUrl + " not found"});
});


console.log("Application listen:  " + port);
app.listen(port);

