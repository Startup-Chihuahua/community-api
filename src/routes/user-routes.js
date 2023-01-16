const express = require('express');
const userController = require('../controllers/user-controller');

const router = express.Router();

router.get('/users', userController.findUsers);
router.get('/users/:userId', userController.findOneUser);
router.post('/users', userController.createUser);
router.put('/users/:userId', userController.updateUser);
router.delete('/users/:userId', userController.deleteUser);
router.post('/users/newPassword', userController.setNewPassword);

module.exports = router;
