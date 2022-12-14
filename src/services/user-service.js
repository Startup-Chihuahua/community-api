const userRepository = require('../database/user-repository');

const getUsers = async () => {
    try {
        return allUsers = await userRepository.getUsers();
    } catch (error) {
        throw error;
    }
};

const getUser = async (userId) => {
    try {
        const [user] = await userRepository.getUser(userId);
        if(user.length === 0){
            throw {
                status: 400,
                message: `ID not found: ${userId}`
            };
        }
        return user;
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
        const user = await userRepository.getUser(userId);
        if(user.length === 0){
            throw {
                status: 400,
                message: `ID not found: ${userId}`
            };
        }else{
            return await userRepository.updateUser(objectUser, userId);
        }
    } catch (error) {
        throw error;
    }
};

const deleteUser = async (userId) => {
    try {
        const data = await userRepository.deleteUser(userId);
        if(data.affectedRows === 0){
            throw {
                status: 400,
                message: `ID not found: ${userId}`
            };
        }
        return data;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getUsers,
    getUser,
    createNewUser,
    updateUser,
    deleteUser
};
