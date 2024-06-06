const express = require("express")
const router = express.Router()
const authRouters = require("../controller/service-controller")

router.route("/service").post(authRouters.add)
router.route("/service/products").get(authRouters.product)

module.exports=router