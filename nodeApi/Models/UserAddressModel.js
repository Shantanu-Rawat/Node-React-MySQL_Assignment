const { db, syncModel } = require("../Infrastructure/database");
const { Sequelize, DataTypes } = require("sequelize");
const { User } = require('./UserDetailsModel');

const UserAddress = db.define("tbl_UserAddresses", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'tbl_Users',
            key: 'id',
        }
    },
  street: { type: Sequelize.STRING },
  name: { type: Sequelize.STRING },
  suite: { type: Sequelize.STRING },
  city: { type: Sequelize.STRING },
  zipcode:{ type: Sequelize.STRING }
});
syncModel(UserAddress);
module.exports = { UserAddress };