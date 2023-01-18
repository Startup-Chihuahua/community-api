const userRepository = require('../repositories/user-repository');
const mailRepository = require('../repositories/token-repository');

const findUsers = async () => {
  try {
    return await userRepository.findUsers();
  } catch (error) {
    throw error;
  }
};

const findOneUser = async (userId) => {
  try {
    return await userRepository.findOneUser(userId);
  } catch (error) {
    throw error;
  }
};

const createNewUser = async (newUser) => {
  try {
    return await userRepository.createNewUser(newUser);
  } catch (error) {
    throw error;
  }
};

const updateUser = async (objectUser, userId) => {
  try {
    return await userRepository.updateUser(objectUser, userId);
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (userId) => {
  try {
    await userRepository.deleteUser(userId);
  } catch (error) {
    throw error;
  }
};

const setNewPassword = async ({ uuid, password }) => {
  try {
    const { id } = await mailRepository.findToken(uuid);
    return userRepository.setPassword(id, password);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  findUsers,
  findOneUser,
  createNewUser,
  updateUser,
  deleteUser,
  setNewPassword,
};
