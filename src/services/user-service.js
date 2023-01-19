const userRepository = require('../repositories/user-repository');

const findUsers = async () => userRepository.findUsers();

const findOneUser = async (userId) => userRepository.findOneUser(userId);

const createNewUser = async (newUser) => userRepository.createNewUser(newUser);

const updateUser = async (objectUser, userId) =>
  userRepository.updateUser(objectUser, userId);

const deleteUser = async (userId) => userRepository.deleteUser(userId);

module.exports = {
  findUsers,
  findOneUser,
  createNewUser,
  updateUser,
  deleteUser,
};
