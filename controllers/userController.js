const asyncHandler = require("express-async-handler");
const {
  searchUser,
  createUser,
  updateUserData,
  getAllUsers,
  deleteUserAccount,
} = require("../services/userServices");

const { getUserCart, createShoppingCart } = require("../services/cartServices");

const { generateToken } = require("../config/token");

exports.signup_user = asyncHandler(async (req, res, next) => {
  try {
    const { nickname } = req.body;

    let searchedUser = await searchUser(nickname);

    if (searchedUser) {
      res.status(400).send("user already exist");
    } else {
      let user_data = req.body;
      let newUser = await createUser(user_data);
      await createShoppingCart(newUser);

      res.status(200).send(newUser);
    }
  } catch (error) {
    next(error);
  }
});

exports.login_user = asyncHandler(async (req, res, next) => {
  try {
    let { nickname, password } = req.body;
    let user = await searchUser(nickname);

    let validatedPassword = await user.validatePassword(password);

    if (validatedPassword) {
      const payload = {
        email: user.email,
        nickname: user.nickname,
        is_admin: user.is_admin,
      };

      let userCookie = generateToken(payload);

      res.cookie("token", userCookie);

      res.status(200).send(payload);
    } else {
      res.send("wrong password or user_name");
    }
  } catch (error) {
    console.log(error);
  }
});

exports.logout_user = asyncHandler(async (req, res) => {
  try {
    res.clearCookie("token");
    res.sendStatus(204);
  } catch (error) {
    throw Error(error);
  }
});

exports.update_user_data = asyncHandler(async (req, res) => {
  try {
    const { nickname } = req.params;
    let userChanges = req.body;
    let updatedUser = await updateUserData(userChanges, nickname);

    res.status(200).send(updatedUser);
  } catch (error) {
    throw Error(error);
  }
});

exports.see_all_users = asyncHandler(async (req, res) => {
  try {
    let signedUpUsers = await getAllUsers();
    res.status(200).send(signedUpUsers);
  } catch (error) {
    throw Error(error);
  }
});

exports.delete_user_account = asyncHandler(async (req, res) => {
  try {
    const { nickname } = req.params;

    await deleteUserAccount(nickname);

    res.sendStatus(201);
  } catch (error) {
    throw Error(error);
  }
});
