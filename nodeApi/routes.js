const router = require("express").Router();
const userController = require('./Controller/UserController');
const postController = require('./Controller/PostController');
const albumsController = require('./Controller/AlbumsController');

router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUserByID);
router.get('/posts', postController.getPosts);
router.get('/posts/:id', postController.getPostsById);
router.get('/posts/:id/comments', postController.getPostComments);
router.get('/albums', albumsController.getAlbums);
router.get('/albums/:id', albumsController.getAlbumsById);
router.get('/albums/:id/images', albumsController.getImagesByAlbum);

module.exports = router;