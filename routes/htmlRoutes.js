var db = require("../models");
var passport = require("../config/passport");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  // Google Login route
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["https://www.googleapis.com/auth/plus.login"]
    })
  );
  // Google callback route
  app.get(
    "/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/login" }),
    function(req, res) {
      res.render("success");
    }
  );
  // This page requires you to be previously authorized to view it
  app.get("/testauth", isAuthenticated, function(req, res) {
    res.render("testauth");
  });
  // Simple email page
  app.get("/email", function(req, res) {
    res.render("email");
  });
  // leaderboard page
  app.get("/kidleaderboard", function(req, res) {
    res.render("kidleaderboard");
  });
  // redirect page if you go somewhere but you're not authenticated
  app.get("/login", function(req, res) {
    res.render("login");
  });
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("mainindex", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
