const model = require("../../model/sakila.model");
const api = require("../../tools/common");

getAllActorData = async (req, res) => {
  let data = await model.getAllActor();
  return api.ok(res, data);
};

module.exports = {
  getAllActorData,
};