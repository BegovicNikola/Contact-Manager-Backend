const express = require('express');
const router = express.Router();

// @route GET api/contacts
// @desc Get all user contacts
// @access Private
router.get('/', (req, res) => {
  res.send('Get all contacts for user');
});

// @route POST api/contacts
// @desc Add a new contact
// @access Private
router.post('/', (req, res) => {
  res.send('Add contact');
});

// @route PUT api/contacts/:id
// @desc Update contact
// @access Private
router.put('/:id', (req, res) => {
  res.send('Edit contact');
});

// @route DELETE api/contacts/:id
// @desc Delete contact
// @access Private
router.delete('/:id', (req, res) => {
  res.send('Remove contact');
});

module.exports = router;
