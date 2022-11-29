const userData = require('../database/user-data');

const getUsers = async () => {
    try {
        const [allUsers] = await userData.getUsers();
        return allUsers;
    } catch (error) {
        throw error;
    }
};

const getUser = async (userId) => {
    try {
        const [user] = await userData.getUser(userId);
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
        return await userData.createNewUser(newUser);
    } catch (error) {
        throw error;
    }
};

const updateUser = async (objectUser, userId) => {
    try {
        const [user] = await userData.getUser(userId);
        if(user.length === 0){
            throw {
                status: 400,
                message: `ID not found: ${userId}`
            };
        }else{
            return await userData.updateUser(objectUser, userId);
        }
    } catch (error) {
        throw error;
    }
};

const deleteUser = async (userId) => {
    try {
        const data = await userData.deleteUser(userId);
        if(data[0].affectedRows === 0){
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
