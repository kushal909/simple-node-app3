const express = require('express');
const router = express.Router();
let users = []; // In-memory storage
// CREATE
router.post('/', (req, res) => {
  const user = { id: Date.now(), name: req.body.name };
  users.push(user);
  res.status(201).json(user);
});
// READ ALL
router.get('/', (req, res) => {
  res.json(users);
});
// READ ONE
router.get('/:id', (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  user ? res.json(user) : res.status(404).json({ error: 'User not found' });
});
// UPDATE
router.put('/:id', (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  if (user) {
    user.name = req.body.name;
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});
// DELETE
router.delete('/:id', (req, res) => {
  users = users.filter(u => u.id != req.params.id);
  res.json({ message: 'User deleted' });
});
module.exports = router;
