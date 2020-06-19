const express = require('express')
const v1APIRouter = express.Router()

const userApiRouter = require("../api/userprofile")

v1APIRouter.use('/userprofile',userApiRouter)

module.exports = v1APIRouter;