const userRepository = require('../repositories/user-repository');
const mailRepository = require('../repositories/token-repository');

const findUsers = async () => userRepository.findUsers();

const findOneUser = async (userId) => userRepository.findOneUser(userId);

const createNewUser = async (newUser) => userRepository.createNewUser(newUser);

const updateUser = async (objectUser, userId) =>
  userRepository.updateUser(objectUser, userId);

const deleteUser = async (userId) => userRepository.deleteUser(userId);

const setNewPassword = async ({ uuid, password }) => {
  try {
    const { id } = await mailRepository.findToken(uuid);
    return await userRepository.setPassword(id, password);
  } catch (error) {
    throw error;
  }
};

const findUserByEmail = async ({ mail }) =>
  userRepository.findUserByEmail(mail);

module.exports = {
  findUsers,
  findOneUser,
  createNewUser,
  updateUser,
  deleteUser,
  setNewPassword,
  findUserByEmail,
};
