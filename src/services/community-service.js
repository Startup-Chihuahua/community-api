const communityRepository = require('../repositories/community-respository');

const findCommunities = async () => communityRepository.findCommunities();

const findOneCommunity = async (communityId) =>
  communityRepository.findOneCommunity(communityId);

const createNewCommunity = async (newCommunity) =>
  communityRepository.createNewCommunity(newCommunity);

const updateCommunity = async (objectCommunity, communityId) =>
  communityRepository.updateCommunity(objectCommunity, communityId);

const deleteCommunity = async (communityId) =>
  communityRepository.deleteCommunity(communityId);

module.exports = {
  findCommunities,
  findOneCommunity,
  createNewCommunity,
  updateCommunity,
  deleteCommunity,
};
