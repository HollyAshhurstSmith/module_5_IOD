//chat gpt help 
const friends = require('../models/friends');

//validate gender
const isValidGender = (gender) => {
  return ['male', 'female', 'non-binary'].includes(gender.toLowerCase());
};

//validate starting letter
const isSingleLetter = (letter) => {
  return /^[a-zA-Z]$/.test(letter);
};

const getAllFriends = (req, res) => {
  res.json(friends);
};

const filterFriends = (req, res) => {
  const { gender, letter } = req.query;

  //Validate letter if provided
  if (letter && !isSingleLetter(letter)) {
    return res.status(400).json({ error: 'Letter must be a single alphabet character (A-Z)' });
  }

  let matchingFriends = [...friends];

  if (gender) {
    matchingFriends = matchingFriends.filter(f => f.gender.toLowerCase() === gender.toLowerCase());
  }

  if (letter) {
    matchingFriends = matchingFriends.filter(f => f.name.toLowerCase().startsWith(letter.toLowerCase()));
  }

  if (matchingFriends.length > 0) {
    res.status(200).json(matchingFriends);
  } else {
    res.status(404).json({ error: "No friends matching given filters." });
  }
};

const getFriendInfo = (req, res) => {
  const info = {
    'user-agent': req.headers['user-agent'],
    'content-type': req.headers['content-type'],
    'accept': req.headers['accept']
  };
  res.json(info);
};

const getFriendById = (req, res) => {
  const friendId = parseInt(req.params.id);
  const friend = friends.find(f => f.id === friendId);

  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({ error: `Friend with ID ${friendId} not found.` });
  }
};

const addFriend = (req, res) => {
  const newFriend = req.body;

  if (!newFriend.name || typeof newFriend.name !== 'string') {
    return res.status(400).json({ error: 'Name is required and must be a string' });
  }

  if (!newFriend.gender || !isValidGender(newFriend.gender)) {
    return res.status(400).json({ error: 'Gender is required and must be male, female, or non-binary' });
  }

  if (!newFriend.id) {
    newFriend.id = friends.length + 1;
  }

  friends.push(newFriend);
  res.status(200).json(newFriend);
};

const updateFriend = (req, res) => {
  const friendId = parseInt(req.params.id);
  const updatedData = req.body;

  const friendIndex = friends.findIndex(f => f.id === friendId);

  if (friendIndex === -1) {
    return res.status(404).json({ error: `Friend with ID ${friendId} not found.` });
  }

  // Optionally validate fields if they are being updated
  if (updatedData.name && typeof updatedData.name !== 'string') {
    return res.status(400).json({ error: 'Name must be a string' });
  }

  if (updatedData.gender && !isValidGender(updatedData.gender)) {
    return res.status(400).json({ error: 'Gender must be male, female, or non-binary' });
  }

  friends[friendIndex] = { ...friends[friendIndex], ...updatedData, id: friendId };

  res.status(200).json({
    message: `Friend with ID ${friendId} updated successfully.`,
    updatedFriend: friends[friendIndex]
  });
};

module.exports = {
  getAllFriends,
  filterFriends,
  getFriendInfo,
  getFriendById,
  addFriend,
  updateFriend
};
