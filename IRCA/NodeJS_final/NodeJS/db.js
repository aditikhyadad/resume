const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/IRCA', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('MongoDB connection succeeded');
  })
  .catch((err) => {
    console.error('Error in DB connection: ' + JSON.stringify(err, undefined, 2));
  });

module.exports = mongoose;
