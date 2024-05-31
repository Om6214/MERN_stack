const express = require("express")
const authrouter = require('../controller/auth-controller')
const validate = require('../middleware/validate-middleware')
const schema = require("../validators/auth-validators");

const router = express.Router();

router.route("/").get(authrouter.home)
router
    .route("/register")
    .post(validate.signupvalidate(schema.signupschema),authrouter.register)
router
    .route("/login")
    .post(validate.loginValidate(schema.loginschema),authrouter.login)


module.exports=router;