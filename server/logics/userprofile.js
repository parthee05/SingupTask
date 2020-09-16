const userProfileModel = require("../database/index").models.userProfile;
const create = async req => {
  const json = req.body;
  console.log(req.body);
  const postData = {
    username: json.username,
    password: json.password,
    password: json.password,
  };
  return await userProfileModel.create(postData);
};

module.exports = {
  create,
};
