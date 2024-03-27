const { getProperties, getSingleProperty, addProperty, postComment, bookingProperty } = require("../Controller/PropertyController")

const propertyRouter =  require("express").Router()

propertyRouter.get("/", getProperties)
propertyRouter.get("/:id", getSingleProperty)

propertyRouter.post("/:id/comments", postComment)
propertyRouter.post("/:id", bookingProperty)
propertyRouter.post("/", addProperty)

module.exports = propertyRouter;