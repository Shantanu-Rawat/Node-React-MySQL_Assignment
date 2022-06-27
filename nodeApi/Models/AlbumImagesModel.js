const { db, syncModel } = require('../Infrastructure/database');
const { Sequelize, DataTypes } = require("sequelize");
const { albums } = require('./UserAlbumsModel');

const images = db.define("tbl_AlbumImages", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    albumId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'tbl_UserAlbums',
            key: 'id',
        }
    },
    title: { type: Sequelize.STRING },
    url: { type: Sequelize.STRING },
    thumbnailUrl: { type: Sequelize.STRING }
});
syncModel(images);
module.exports = { images };