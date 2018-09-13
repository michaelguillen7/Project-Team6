var db = require("../models");

<<<<<<< HEAD
//Auth Dependencies. We may move passport to its own file, but getting it working for now:
//////////////////////////////////////////////////////////////////////////////////////////
var check = require("../authcheck.js");
const passport = require("passport");
const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt")

const passportOps = {
  jwtFromRequest: ExtractJwt.fromBodyField(),
  secretOrKey: process.env.JWT_SECRET
}

passport.use(new JwtStrategy(passportOps, (jwt_payload, done) => {
  connection.query("SELECT * FROM users WHERE id = ?", [jwt_payload.id], function (err, results) {
    console.log(results);
    if (err) {
      return done(err, false);
    }
    if (results.length < 1) {
      return done(null, false);
    }

    done(null, results[0]);
  })
}));

//and auth-based routing, as well:

// app.post("/verified", passport.authenticate('jwt', {session: false}), function(req, res) {
//   // req.setRequestHeader('Authorization', 'Basic eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZXhwaXJlcyI6MTUzOTM3MTEwODIwMCwiaWF0IjoxNTM2Nzc5MTA4fQ.fQ63RLS7Jd8QeZ0LlOAIKa_PL9YzEgQiWRAzq38Kc9c' );
//   console.log(req.body.jwtToken);
//   // const { userName, password } = req.userName;
//   res.render("verified");
// });

// app.post("/verified", function (req, res){
//     ;
// });

// // The route to go to a page for logged in users:  STILL IN DEVELOPMENT
// app.post("/verified", passport.authenticate('jwt', { session: false }), function(req, res) {
//   //WRAP THIS IN IF LOGIC TO GO BASED ON JWT AUTH.
//   res.render("verified");
// });


// Load example page and pass in an example by id
// app.get("/example/:id", function(req, res) {
//   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
//     res.render("example", {
//       example: dbExample
//     });
//   });
// });

//////////////////////////////////////////////////////////////////////////////////////////////////


//WORKING STUFF:
module.exports = function (app) {

  app.get("/", function (req, res) {
=======
module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
>>>>>>> master
    res.render("index");
  });

  app.get("/results", function (req, res) {
    res.render("results");
  });

<<<<<<< HEAD
  app.get("*", function (req, res) {
=======

  // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  //Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
>>>>>>> master
    res.render("404");
  });
};
