const express = require('express');
const communityController = require('../controllers/community-controller');

const router = express.Router();

router.get('/communities', communityController.findCommunities);
router.get('/communities/:communityId', communityController.findOneCommunity);
router.post('/communities', communityController.createCommunity);
router.put('/communities/:communityId', communityController.updateCommunity);
router.delete('/communities/:communityId', communityController.deleteCommunity);
module.exports = router;
