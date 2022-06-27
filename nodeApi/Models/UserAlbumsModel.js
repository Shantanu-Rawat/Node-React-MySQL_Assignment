const { db, syncModel } = require('../Infrastructure/database');
const { Sequelize, DataTypes } = require("sequelize");
const { User } = require('./UserDetailsModel');

const albums = db.define("tbl_UserAlbums", {
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
    title: { type: Sequelize.STRING }
});
albums.belongsTo(User);
User.hasMany(albums);
syncModel(albums);
module.exports = { albums };