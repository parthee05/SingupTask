const userProfileModel = require("../database/index").models.userProfile;
const signIn = async req => {
  const json = req.body;
  console.log(req.body);
  const postData = {
    username: json.username,
    password: json.password,
  };
  return await userProfileModel.signIn(postData);
};
const create = async req => {
  let data = req.body
  console.log(data)

}

module.exports = {
  signIn,
  create,
};
