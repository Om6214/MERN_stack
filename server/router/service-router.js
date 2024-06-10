const express = require("express")
const router = express.Router()
const authRouters = require("../controller/service-controller")
const filterController = require("../controller/filter-controller")

router.route("/service/products").get(authRouters.product)
router.route("/products/:prodCategory").get(filterController.getProdByCat)

module.exports=router