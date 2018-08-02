var db = require("../models");
const nodemailer = require('nodemailer');


module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // update a user in Chore
  app.put("/api/update", function(req, res) {
    console.log(req.user);
    db.Chore.update(req.body, {where: {googleid: req.user.id}}).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Create a new task
  app.post("/api/createtask", function(req, res) {
    db.Task.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Send an email
  app.post("/api/sendemail", function(req, res) {

    var sendMail = async (subject, text) => {
      nodemailer.createTestAccount((err, account) => {
        let transporter = nodemailer.createTransport({
          host: 'Gmail',
          port: 587,
          secure: false,
          service: "Gmail",
          auth: {
            user: 'chorbiesapp@gmail.com',
            pass: 'Ch0rb13s'
          }
        });

        let mailOptions = {
          from: '"Our App" <chorbiesapp@gmail.com>',
          to: '"me" <ronald_nakata@msn.com>',
          subject,
          text
        };

        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            return console.log(error);
          }
          console.log('Message sent: %s', info.messageId);
          console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        });
      });
    }
    sendMail('Hello', 'Hello from our app');

    res.send("email sent");
  })

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
