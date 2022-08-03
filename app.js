const path = require("path");

const express = require("express");

const defaultRoutes = require('./routes/default');
const restaurantRoutes = require('./routes/restaurants');

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middlewares for serving static files and parsing.
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

// Middlewares for Routers.
app.use('/', defaultRoutes);
app.use('/', restaurantRoutes);

// Custom middleware to handle invalid user error.
app.use(function (req, res) {
  res.status(404).render("404");
});

// Middleware to handle server error.
app.use(function (error, req, res, next) {
  res.status(500).render("500");
});

app.listen(3000);

