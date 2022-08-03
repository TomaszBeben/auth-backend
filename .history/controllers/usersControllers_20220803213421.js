// @desc   Get Users
// @route  /api/users
const getUsers = (req, res) => {
  res.status(200).json({ message: 'Get Users' })
}

// @desc   Post Users
// @route  /api/users
const postUser = (req, res) => {
  // res.status(200).json({ message: 'Post User' })
  console.log(req.body);
  if(!req.body.test) {
    res.status(400)
  }
}

// @desc   Update Users
// @route  /api/users/:id
const updateUser = (req, res) => {
  res.status(200).json({ message: `Update User ${req.params.id}` })
}

// @desc   Delete Users
// @route  /api/users/:id
const deleteUser = (req, res) => {
  res.status(200).json({ message: `Update User ${req.params.id}` })
}

module.exports = {
  getUsers,
  postUser,
  updateUser,
  deleteUser,
}