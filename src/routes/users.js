const express = require('express');
const userController = require('../controllers/user-controller');
const router = express.Router();

router.get("/", userController.getUsers);
router.get("/:userId", userController.getUser);
router.post("/", userController.createUser);
router.put("/:userId", userController.updateUser);
router.delete("/:userId", userController.deleteUser);

module.exports = router;