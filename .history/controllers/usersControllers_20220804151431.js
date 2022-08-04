const asyncHandler = require('express-async-handler')
const Auth = require('../models/authModel')

// @desc   Get Users
// @route  /api/users
const getUsers = asyncHandler(async (req, res) => {
  const users = await Auth.find()
  res.status(200).json(users)
})

// @desc   Post Users
// @route  /api/users
const postUser = asyncHandler(async (req, res) => {
  if (!req.body.test) {
    res.status(400)
    throw new Error('Please add a test field')
  }

  const user = await Auth.create({
    test: req.body.test
  })

  res.status(200).json(user)
})

// @desc   Update Users
// @route  /api/users/:id
const updateUser = asyncHandler(async (req, res) => {
  const user = await Auth.findById(req.params.id, req.body, { new: true })

  if (!user) {
    res.status(400)
    throw new Error('user not found')
  }

  const updateUser = await Auth.findByIdAndUpdate(req.params.id)

  res.status(200).json({ message: `Update User ${req.params.id}` })
})

// @desc   Delete Users
// @route  /api/users/:id
const deleteUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update User ${req.params.id}` })
})

module.exports = {
  getUsers,
  postUser,
  updateUser,
  deleteUser,
}