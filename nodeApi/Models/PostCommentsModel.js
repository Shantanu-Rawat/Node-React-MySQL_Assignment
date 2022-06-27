const { db, syncModel } = require("../Infrastructure/database");
const { Sequelize, DataTypes } = require("sequelize");
const { UserPosts } = require('./UserPostsModel');
const { User } = require('./UserDetailsModel');

const PostComments = db.define("tbl_PostComments", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    postId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'tbl_UserPosts',
            key: 'id',
        }
    },
    userId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'tbl_Users',
            key: 'id',
        }
    },
  body: { type: Sequelize.STRING }
});

PostComments.belongsTo(UserPosts);
UserPosts.hasMany(PostComments);
syncModel(PostComments);
module.exports = { PostComments };