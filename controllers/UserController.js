const { createUser, updateUser, deleteUser, getUserById, getUsers } = require("../models/user.model");


const createUserControllr = (req, res) => {
  const { name, email, phone } = req.body;
  const user = createUser(name, email, phone);
  res.status(201).json(user);
};

const updateUserControllr = (req, res) => {
  const { id } = req.params;
  const { name, email, phone } = req.body;
  const user = updateUser(parseInt(id), name, email, phone);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).send('User not found');
  }
};


const deleteUserControllr = (req, res) => {
  const { id } = req.params;
  const success = deleteUser(parseInt(id));
  if (success) {
    res.status(204).send();
  } else {
    res.status(404).send('User not found');
  }
};


const getUserByIDControllr = (req, res) => {
  const { id } = req.params;
  const user = getUserById(parseInt(id));
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).send('User not found');
  }
};

const getUsersControllr = (req, res) => {
  const users = getUsers();
  if (users) {
    res.status(200).json(users);
  } else {
    res.status(404).send('User not found');
  }
};

module.exports = {createUserControllr, updateUserControllr, deleteUserControllr, getUserByIDControllr, getUsersControllr,}
