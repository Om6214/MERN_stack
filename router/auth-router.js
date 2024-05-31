const express = require("express")
const authrouter = require('../controller/auth-controller')
const validate = require('../middleware/validate-middleware')
const signupschema = require('../validators/auth-validators')

const router = express.Router();

router.route("/").get(authrouter.home)
router
    .route("/register")
    .post(validate(signupschema),authrouter.register)
router.route("/login").post(authrouter.login)


module.exports=router;