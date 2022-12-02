const communityData = require('../database/community-data');

const getComunnitys = async () => {
    try {
        const [allCommunitys] = await communityData.getComunnitys();
        return allCommunitys;
    } catch (error) {
        throw error;
    }
};

const getOneCommunity = async (communityId) => {
    try {
        const [community] = await communityData.getOneCommunity(communityId);
        if(community.length === 0){
            throw {
                status: 400,
                message: `ID not found: ${communityId}`
            };
        }
        return community;
    } catch (error) {
        throw error;
    }
};

const createNewCommunity = async (newCommunity) => {
    try {
        return await communityData.createNewCommunity(newCommunity);
    } catch (error) {
        throw error;
    }
};

const updateCommunity = async (objectCommunity, communityId) => {
    try {
        const [community] = await communityData.getOneCommunity(communityId);
        if(community.length === 0){
            throw {
                status: 400,
                message: `ID not found: ${communityId}`
            };
        }else{
            return await communityData.updateCommunity(objectCommunity, communityId);
        }
    } catch (error) {
        throw error;
    }
};

const deleteCommunity = async (communityId) => {
    try {
        const data = await communityData.deleteCommunity(communityId);
        if(data[0].affectedRows === 0){
            throw {
                status: 400,
                message: `ID not found: ${communityId}`
            };
        }
        return data;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getComunnitys,
    getOneCommunity,
    createNewCommunity,
    updateCommunity,
    deleteCommunity
};