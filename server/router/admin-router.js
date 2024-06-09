const express = require("express")
const router = express.Router()
const service_controller=require("../controller/service-controller")
const authMiddleware = require("../middleware/authMiddleware")
const adminMiddleware = require("../middleware/admin-middleware")

router.route("/addprod").post(authMiddleware,adminMiddleware,service_controller.add)
router.route("/getusers/delete/:id").delete(authMiddleware,adminMiddleware,service_controller.deleteUser)
router.route("/update/:id").put(service_controller.updateUser)
router.route("/getusers").get(authMiddleware,adminMiddleware,service_controller.getusers)
router.route("/getcontacts").get(authMiddleware,adminMiddleware,service_controller.getContacts)
router.route("/getcontacts/delete/:id").delete(authMiddleware,adminMiddleware,service_controller.deleteMsg)

module.exports=router;