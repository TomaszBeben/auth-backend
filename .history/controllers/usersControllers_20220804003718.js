// @desc   Get Users
// @route  /api/users
const getUsers = async (req, res) => {
  res.status(200).json({ message: 'Get Users' })
}

// @desc   Post Users
// @route  /api/users
const postUser = async (req, res) => {
  if (!req.body.test) {
    res.status(400)
    throw new Error('Please add a test field')
  }
}

// @desc   Update Users
// @route  /api/users/:id
const updateUser = async (req, res) => {
  res.status(200).json({ message: `Update User ${req.params.id}` })
}

// @desc   Delete Users
// @route  /api/users/:id
const deleteUser = async (req, res) => {
  res.status(200).json({ message: `Update User ${req.params.id}` })
}

module.exports = {
  getUsers,
  postUser,
  updateUser,
  deleteUser,
}