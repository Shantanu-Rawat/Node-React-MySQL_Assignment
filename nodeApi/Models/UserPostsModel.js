const { db, syncModel } = require("../Infrastructure/database");
const { Sequelize, DataTypes } = require("sequelize");
const { User } = require('./UserDetailsModel');

const UserPosts = db.define("tbl_UserPosts", {
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
  title: { type: Sequelize.STRING },
  body: { type: Sequelize.STRING }
});
syncModel(UserPosts);
module.exports = { UserPosts };