const User = require("../model/user_model");
const Contact = require("../model/contact_model");
const bcrypt = require("bcrypt");
const home = async (req, res) => {
  try {
    res.status(200).send("welcome to home from controller");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    const { Name, Email, Phone_number, Password } = req.body;
    const userExist = await User.findOne({ Email });
    if (userExist) {
      res.status(400).json({ message: "User already exist" });
    }

    const user = await User.create({ Name, Email, Phone_number, Password });
    res.status(200).json({
      msg: "Registration successfull",
      token: await user.generateToken(),
      userID: user._id.toString(),
    });
  } catch (error) {
    res.status(400).json({ message: `${error}` });
  }
};

// login logic

const login = async (req, res, next) => {
  try {
    const { Email, Password } = req.body;
    const userExist = await User.findOne({ Email });

    // Check if user exists
    if (!userExist) {
      return res.status(422).json({ message: "User doesn't exist please Register first" });
    }

    // Compare password
    const isPasswordCorrect = await bcrypt.compare(
      Password,
      userExist.Password
    );
    if (!isPasswordCorrect) {
      return res.status(422).json({ message: "Invalid Credentials" });
    }

    // If login is successful
    res.status(200).json({
      msg: "Login successful",
      token: await userExist.generateToken(),
      userID: userExist._id.toString(),
    });
  } catch (err) {
    console.log("error is", err);
    res.status(500).json({ message: err });
  }
};

// logic for contact page

const service = async (req, res) => {
  try {
    const { Name, Email, Message } = req.body;

    // Create a new contact
    const contact = await Contact.create({ Name, Email, Message });

    // If contact creation fails, send a 500 status code
    if (!contact) {
      return res.status(500).json({ "message": "Failed to submit contact form" });
    }

    // Find the user by email
    const user = await User.findOne({ Email });

    // If the user is not found, send a 404 status code
    if (!user) {
      return res.status(404).json({ "message": "User not found" });
    }

    // Send a success response if everything is fine
    return res.status(200).json({ "message": "Contact form submitted successfully" });
  } catch (error) {
    // Handle any other errors
    return res.status(400).json({ "message": `Error: ${error.message}` });
  }
};


const user = async (req, res) => {
  try {
    const userData = req.user;
    return res.status(200).json({ userData });
  } catch (error) {
    res.status(400).json({ msg: "invalid http request" });
  }
};

module.exports = { home, register, login, service, user };
