const { User } = require('../Models/UserDetailsModel');
const { Sequelize } = require("sequelize");
const { UserAddress } = require('../Models/UserAddressModel');

const getUsers = async (req, res) => {
    const userList = await User.findAll({
        attributes: ['id', 'name', 'userName','email'],
    });
    res.send({
        data: userList
    })
};

const getUserByID = async (req, res) => {
    const user = await User.findOne({
        attributes: ['id', 'name', 'username', 'email', 'mobile', 'website'],
        where: {id: req.params.id}
    });
    let address = await UserAddress.findAll({
        attributes: ['street', 'suite', 'city', 'zipcode'],
        where: { userId: user.id }
    });
    res.send({
        data: {
            id: user.id,
            name: user.name,
            userName: user.username,
            email: user.email,
            address: address,
            phone: user.mobile,
            website: user.website,
        }
    });
}


module.exports.getUsers = getUsers;
module.exports.getUserByID = getUserByID;

