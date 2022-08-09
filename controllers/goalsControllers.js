const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModel')

// @desc   Get goals
// @route  /api/goals
const getUsers = asyncHandler(async (req, res) => {
  const users = await Goal.find()
  res.status(200).json(users)
})

// @desc   Post goals
// @route  /api/goals
const postUser = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }

  const user = await Goal.create({
    text: req.body.text
  })

  res.status(200).json(user)
})

// @desc   Update goals
// @route  /api/goals/:id
const updateUser = asyncHandler(async (req, res) => {
  const user = await Goal.findById(req.params.id)

  if (!user) {
    res.status(400)
    throw new Error('user not found')
  }

  const updateUser = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true })

  res.status(200).json(updateUser)
})

// @desc   Delete goals
// @route  /api/goals/:id
const deleteUser = asyncHandler(async (req, res) => {
  const user = await Goal.findById(req.params.id)

  if (!user) {
    res.status(400)
    throw new Error('user not found')
  }

  await user.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getUsers,
  postUser,
  updateUser,
  deleteUser,
}