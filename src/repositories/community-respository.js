const connect = require('../connection/dbconnection');

const findCommunities = async () =>{
    try {
        const connection = await connect();
        const [data] = await connection.query("SELECT * FROM community");
        return data;
    } catch (error) {
        throw { status: 500, message: error };
    }
    
};

const findOneCommunity = async (communityId) => {
    try {
        const connection = await connect();
        const [data] = await connection.query("SELECT * FROM community WHERE community = ?", [communityId]);
        if(data.length === 0){
            throw {
                status: 400,
                message: `ID not found: ${communityId}`
            };
        }
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
        await findOneCommunity(communityId);
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
        if(data[0].affectedRows === 0){
            throw {
                status: 400,
                message: `ID not found: ${communityId}`
            };
        }
    } catch (error) {
        throw { status: 500, message: error };
    }
};

module.exports = {
    findCommunities,
    findOneCommunity,
    createNewCommunity,
    updateCommunity,
    deleteCommunity
}
