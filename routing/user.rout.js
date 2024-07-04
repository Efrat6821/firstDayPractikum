const express = require('express');
const router = express.Router();
const {createUserControllr, updateUserControllr, deleteUserControllr, getUserByIDControllr, getUsersControllr} = require('../controllers/UserController');

router.get('/', getUsersControllr);
router.get('/:id', getUserByIDControllr);
router.post('/', createUserControllr);
router.put('/:id', updateUserControllr);
router.delete('/:id', deleteUserControllr);

module.exports = router;