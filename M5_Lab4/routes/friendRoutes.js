const express = require('express');
const router = express.Router();
const controller = require('../controllers/friendsController');

router.get('/', controller.getAllFriends);
router.get('/filter', controller.filterFriends);
router.get('/info', controller.getFriendInfo);
router.get('/:id', controller.getFriendById);
router.post('/', controller.addFriend);
router.put('/:id', controller.updateFriend);

module.exports = router;
