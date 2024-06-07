const express = require("express")
const authrouter = require('../controller/auth-controller')
const validate = require('../middleware/validate-middleware')
const schema = require("../validators/auth-validators");
const authMiddleware = require('../middleware/authMiddleware')

const router = express.Router();

router.route("/").get(authrouter.home)
router
    .route("/register")
    .post(validate.signupvalidate(schema.signupschema),authrouter.register)
router
    .route("/login")
    .post(validate.signupvalidate(schema.loginschema),authrouter.login)

router
    .route('/contact')
    .post(validate.signupvalidate(schema.contactSchema),authrouter.service)

router.route('/user').get(authMiddleware,authrouter.user)


module.exports=router;