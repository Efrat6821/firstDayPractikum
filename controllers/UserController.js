exports.createUser('/users', (req, res) => {
  const { name, email, phone } = req.body;
  const user = {name, email, phone}
  res.status(201).json(user);
});

exports.updateUser('/users/:id', (req, res) => {
  const { id } = req.params;
  const { name, email, phone } = req.body;
  const user = {id, name, email, phone}
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).send('User not found');
  }
});


exports.deleteUser('/users/:id', (req, res) => {
  const { id } = req.params;
  if (success) {
    res.status(204).send();
  } else {
    res.status(404).send('User not found');
  }
});


exports.getUserByID('/users/:id', (req, res) => {
  const { id } = req.params;
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).send('User not found');
  }
});


