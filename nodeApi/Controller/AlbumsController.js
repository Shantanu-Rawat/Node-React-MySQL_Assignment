const { albums } = require('../Models/UserAlbumsModel');
const { Sequelize } = require("sequelize");
const { images } = require('../Models/AlbumImagesModel');

const getAlbums = async (req, res) => {
    const albumList = await albums.findAll({
        attributes: ['userId', 'id', 'title'],
    });
    res.send({
        data: albumList
    });
};

const getAlbumsById = async (req, res) => {
    const album = await albums.findOne({
        attributes: ['userId', 'id', 'title'],
        where: {
            id: req.params.id
        }
    });
    res.send({
        data: album
    });
};

const getImagesByAlbum = async (req, res) => {
    const imageList = await images.findAll({
        attributes: ['albumId', 'id', 'title', 'url', 'thumbnailUrl'],
        where: {
            albumId: req.params.id
        }
    });
    res.send({
        data: imageList
    })
};

module.exports.getAlbums = getAlbums;
module.exports.getAlbumsById = getAlbumsById;
module.exports.getImagesByAlbum = getImagesByAlbum;