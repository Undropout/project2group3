const aws = require('aws-sdk');

// let s3 = new aws.S3({
//   accessKeyId: process.env.S3_KEY,
//   secretAccessKey: process.env.S3_SECRET
// });

// ^^^above is example from heroku

// working on localhost:
exports.google = {
  consumer_key: process.env.GOOGLE_CONSUMER_KEY,
  consumer_secret: process.env.GOOGLE_CONSUMER_SECRET
};


// exports.google = new aws.GOOGLE_CONSUMER({
//   consumer_key: process.env.GOOGLE_CONSUMER_KEY,
//   consumer_secret: process.env.GOOGLE_CONSUMER_SECRET
// });