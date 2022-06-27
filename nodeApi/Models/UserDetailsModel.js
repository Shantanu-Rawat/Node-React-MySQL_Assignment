const { db, syncModel } = require("../Infrastructure/database");
const { Sequelize, DataTypes } = require("sequelize");

const User = db.define("tbl_Users", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: { type: Sequelize.STRING },
  name: { type: Sequelize.STRING },
  email: { type: Sequelize.STRING },
  mobile: { type: Sequelize.STRING },
  website:{ type: Sequelize.STRING }
});

syncModel(User);
module.exports = { User };