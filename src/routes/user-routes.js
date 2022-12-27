const express = require('express');
const userController = require('../controllers/user-controller');
const router = express.Router();

router.get("/findUsers", userController.findUsers);
router.get("/findOneUser/:userId", userController.findOneUser);
router.post("/createUser", userController.createUser);
router.put("/updateUser/:userId", userController.updateUser);
router.delete("/deleteUser/:userId", userController.deleteUser);

module.exports = router;
