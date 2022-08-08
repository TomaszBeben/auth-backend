const asyncHandler = require('express-async-handler')
const goal = require('../models/goalModel')

// @desc   Get Users
// @route  /api/users
const getUsers = asyncHandler(async (req, res) => {
  const users = await goal.find()
  res.status(200).json(users)
})

// @desc   Post Users
// @route  /api/users
const postUser = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }

  const user = await goal.create({
    text: req.body.text
  })

  res.status(200).json(user)
})

// @desc   Update Users
// @route  /api/users/:id
const updateUser = asyncHandler(async (req, res) => {
  const user = await goal.findById(req.params.id)

  if (!user) {
    res.status(400)
    throw new Error('user not found')
  }

  const updateUser = await goal.findByIdAndUpdate(req.params.id, req.body, { new: true })

  res.status(200).json(updateUser)
})

// @desc   Delete Users
// @route  /api/users/:id
const deleteUser = asyncHandler(async (req, res) => {
  const user = await goal.findById(req.params.id)

  if (!user) {
    res.status(400)
    throw new Error('user not found')
  }

  await user.remove()

  res.status(200).json({id: req.params.id})
})

module.exports = {
  getUsers,
  postUser,
  updateUser,
  deleteUser,
}