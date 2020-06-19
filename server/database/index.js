const Mongoose = require("mongoose");


const uri = "mongodb+srv://Parthee:Ei68hYtn25s7ffPS@cluster0-ywmeh.mongodb.net/OnlineShop?retryWrites=true&w=majority";


Mongoose.connect(uri, 
    // { useMongoClient: true, autoIndex: false },
    { useNewUrlParser: true, useUnifiedTopology: true, autoIndex: false }
    )
  .then((_) => {
    console.log("Mongo connected to:" + uri);
  })
  .catch((err) => {
    console.log("Mongo Connection Failed:" + err);
  });

module.exports = {
  Mongoose,
  models: {
    userProfile: require("../database/schema/userProfile"),
  },
};
