const sequelize = require("sequelize");

const db = new sequelize("assignment", "root", "password", {
  host: "127.0.0.1",
  dialect: "mysql",
});
db.authenticate()
  .then(() => {
    console.log("Database connected...");
  })
  .catch((err) => {
    console.log("Error: " + err);
  });

const syncModel = async (Model) => {
  await Model.sync();
};

module.exports = { db, syncModel };