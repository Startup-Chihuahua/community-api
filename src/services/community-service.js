const communityRepository = require('../repositories/community-respository');

const findCommunities = async () => {
    try {
        return await communityRepository.findCommunities();
    } catch (error) {
        throw error;
    }
};

const findOneCommunity = async (communityId) => {
    try {
        return await communityRepository.findOneCommunity(communityId);
    } catch (error) {
        throw error;
    }
};

const createNewCommunity = async (newCommunity) => {
    try {
        return await communityRepository.createNewCommunity(newCommunity);
    } catch (error) {
        throw error;
    }
};

const updateCommunity = async (objectCommunity, communityId) => {
    try {
        return await communityRepository.updateCommunity(objectCommunity, communityId);
    } catch (error) {
        throw error;
    }
};

const deleteCommunity = async (communityId) => {
    try {
        await communityRepository.deleteCommunity(communityId);
    } catch (error) {
        throw error;
    }
};

module.exports = {
    findCommunities,
    findOneCommunity,
    createNewCommunity,
    updateCommunity,
    deleteCommunity
};
