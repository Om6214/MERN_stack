const express = require("express")
const router = express.Router()
const service_controller=require("../controller/service-controller")

router.route("/addprod").post(service_controller.add)
router.route("/getusers").get(service_controller.getusers)
router.route("/getcontacts").get(service_controller.getContacts)

module.exports=router;