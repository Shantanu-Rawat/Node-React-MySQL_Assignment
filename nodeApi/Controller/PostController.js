const { UserPosts } = require('../Models/UserPostsModel');
const { Sequelize } = require("sequelize");
const { PostComments } = require('../Models/PostCommentsModel');
const { User } = require('../Models/UserDetailsModel');

const getPosts = async (req, res) => {
    const posts = await UserPosts.findAll({
        attributes: ['id', 'userId', 'title', 'body'],
    });
    res.send({
        data: posts
    });
};

const getPostsById = async (req, res) => {
    const posts = await UserPosts.findOne({
        attributes: ['id', 'userId', 'title', 'body'],
        where: {
            id: req.params.id
        }
    });
    res.send({
        data: posts
    });
};

const getPostComments = async (req, res) => {
    const comments = await PostComments.findAll({
        attributes: ['id', 'postId', 'userId', 'body'],
        where: {
            postId: req.params.id
        }
    });
    const userDetails = await User.findAll({
        attributes: ['id', 'name', 'email'],
    })
    let postComments = [];
    comments.forEach( (element) => {
        userDetails.forEach( item => {
            if(item.id == element.userId){
                let data = {
                    postId: element.postId,
                    id: element.id,
                    name: item.name,
                    email: item.email,
                    body: element.body
                };
                postComments.push(data);
            }
        });
    });
    res.send({
        data: postComments
    })
}

module.exports.getPosts = getPosts;
module.exports.getPostsById = getPostsById;
module.exports.getPostComments = getPostComments;