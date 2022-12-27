const express = require('express');
const communityController = require('../controllers/community-controller');
const router = express.Router();

router.get("/findCommunities", communityController.findCommunities);
router.get("/findOneCommunity/:communityId", communityController.findOneCommunity);
router.post("/createCommunity", communityController.createCommunity);
router.put("/updateCommunity/:communityId", communityController.updateCommunity);
router.delete("/deleteCommunity/:communityId", communityController.deleteCommunity);

module.exports = router;
