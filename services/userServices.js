const { generateToken } = require("../config/token");
const Users = require("../models/User");

exports.searchUser = async (nickname) => {
  try {
    let user = await Users.findOne({ where: { nickname: nickname } });
    return user;
  } catch (error) {
    throw Error(error);
  }
};

exports.createUser = async (userData) => {
  try {
    let newUser = await Users.create(userData);
    return newUser;
  } catch (error) {
    throw Error(error);
  }
};

exports.updateUserData = async (userChanges, nickname) => {
  try {
    let updatedUser = await Users.update(userChanges, {
      where: {
        nickname: nickname,
      },
      returning: true,
    });
    return updatedUser[1][0];
  } catch (error) {
    throw Error(error);
  }
};

exports.getAllUsers = async () => {
  try {
    let registeredUsers = await Users.findAll();
    return registeredUsers;
  } catch (error) {
    throw Error(error);
  }
};

exports.deleteUserAccount = async (nickname) => {
  try {
    const user = await this.searchUser(nickname);

    user.is_deleted = true;

    await user.save();
  } catch (error) {
    throw Error(error);
  }
};
