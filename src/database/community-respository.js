const connect = require('../connection/dbconnection');

const getComunnitys = async () =>{
    try {
        const connection = await connect();
        const [data] = await connection.query("SELECT * FROM community");
        return data;
    } catch (error) {
        throw { status: 500, message: error };
    }
    
};

const getOneCommunity = async (communityId) => {
    try {
        const connection = await connect();
        const [data] = await connection.query("SELECT * FROM community WHERE community = ?", [communityId]);
        return data;
    } catch (error) {
        throw { status: 500, message: error};
    }
};

const createNewCommunity = async (newCommunity) => {
    try {
        const connection = await connect();
        return connection.query('INSERT INTO community (name, description) VALUES (?,?)', [
            newCommunity.name,
            newCommunity.description,
        ]);
    } catch (error) {
        throw { status: 500, message: error };
    }
};

const updateCommunity = async (objectCommunity, communityId) => {
    try {
        const connection = await connect();
        const [result] = await connection.query("UPDATE community SET ? WHERE community = ?", [
            objectCommunity,
            communityId
        ]);
        return result;
    } catch (error) {
        throw { status: 500, message: error };
    }
};

const deleteCommunity = async (communityId) => {
    try {
        const connection = await connect();
        const data = await connection.query("DELETE FROM community WHERE community = ?", [communityId]);
        return data[0];
    } catch (error) {
        throw { status: 500, message: error };
    }
};

module.exports = {
    getComunnitys,
    getOneCommunity,
    createNewCommunity,
    updateCommunity,
    deleteCommunity
}
