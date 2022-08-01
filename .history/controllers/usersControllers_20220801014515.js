// @desc   Get Users
// @route  /api/users
const getUsers = ( req, res ) => {
  res.status(200).json({ message: 'Get Users' })
}

// @desc   Post Users
// @route  /api/users
const postUser = ( req, res ) => {
  res.status(200).json({ message: 'Post User' })
}

// @desc   Update Users
// @route  /api/users/:id
const updateUser = ( req, res ) => {
  res.status(200).json({ message: 'Update User' })
}

// @desc   Delete Users
// @route  /api/users/:id
const deleteUser = ( req, res ) => {
  res.status(200).json({ message: 'Delete User' })
}

module.exports = {
  getUsers,
  postUser,
  updateUser,
  deleteUser,
}