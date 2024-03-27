const { register, login } = require("../Controller/authController")

const authRouter = require("express").Router()

authRouter.post("/register", register)
authRouter.post("/login", login)

module.exports = authRouter