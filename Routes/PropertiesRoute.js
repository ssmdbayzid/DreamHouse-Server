const { getProperties, getSingleProperty } = require("../Controller/PropertyController")

const propertyRouter =  require("express").Router()

propertyRouter.get("/", getProperties)
propertyRouter.get("/:id", getSingleProperty)

module.exports = propertyRouter;