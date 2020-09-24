const Mongoose = require("mongoose");
const express = require("express");
const userv1Router = express.Router();
const userprofile = require("../logics/userprofile");
let app = express();

userv1Router.post("/signin", async (req, res) => {
  try {
    const userSignin = await userprofile.signIn(req);
    res.status(200).send(userSignin);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

userv1Router.post("/create", async (req,res) => {
  try {
    const userProfileDetails = await userprofile.create(req);
    res.status(200).send(userProfileDetails)
  } catch (err) {
    res.status(500).send(err.message)
  }
})
module.exports = userv1Router;
