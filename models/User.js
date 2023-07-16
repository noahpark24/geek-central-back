const Sequelize = require("sequelize");
const bc = require("bcrypt");
const db = require("../config/db/index");

class User extends Sequelize.Model {
  createHash(password, salt) {
    return bc.hash(password, salt);
  }
  validatePassword(password) {
    return this.createHash(password, this.salt).then(
      (newhash) => newhash === this.password
    );
  }
}

User.init(
  {
    name: { type: Sequelize.STRING, required: true },
    nickname: { type: Sequelize.STRING, required: true, unique: true },
    lastname: { type: Sequelize.STRING, required: true },
    address: { type: Sequelize.STRING, required: true },
    zip_code: { type: Sequelize.STRING, required: true },
    city: { type: Sequelize.STRING, required: true },
    email: {
      type: Sequelize.STRING,
      required: true,
      validate: { isEmail: true },
    },
    password: { type: Sequelize.STRING, required: true },
    is_admin: { type: Sequelize.BOOLEAN, defaultValue: false },
    is_deleted: { type: Sequelize.BOOLEAN, defaultValue: false },
    salt: { type: Sequelize.STRING },

  },
  {
    sequelize: db,
    modelName: "user",
  }
);

User.addHook("beforeCreate", (user) => {
  const salt = bc.genSaltSync();
  user.salt = salt;
  return user
    .createHash(user.password, user.salt)
    .then((result) => (user.password = result))
    .catch((err) => console.log(err));
});

module.exports = User;
