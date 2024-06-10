const Device = require("../model/add_prod");
const User = require("../model/user_model");
const Contact = require("../model/contact_model");
const bcrypt = require("bcrypt")

const add = async (req, res) => {
  try {
    const { prodImg, prodName,prodCategory,prodStocks, prodPrice, discountPrice, Description } =
      req.body;

    if (!prodImg || !prodName || !prodCategory || !prodStocks || !prodPrice || !Description) {
      return res
        .status(400)
        .json({ msg: "All required fields must be provided" });
    }

    const product = new Device({
      prodImg,
      prodName,
      prodCategory,
      prodStocks,
      prodPrice,
      discountPrice,
      Description,
    });
    await product.save();
    res.status(200).json({ msg: product });
  } catch (error) {
    console.log("error:", error);
    res
      .status(400)
      .json({ msg: "Product failed to add", error: error.message });
  }
};

const product = async (req, res) => {
  try {
    const response = await Device.find();
    if (!response) {
      res.status(400).json({ msg: "Failed to fetch the products" });
    }
    res.status(200).json({ msg: response });
  } catch (error) {
    console.log(error);
  }
};

const deleteMsg = async (req, res) => {
  try {
    const id = req.params.id;
    const test = await Contact.deleteOne({ _id: id });
    if (test) {
      return res.status(200).json({ message: "message deleted successfully" });
    }
  } catch (error) {
    return res.status(404).json({ error });
  }
};

const getContacts = async (req, res, next) => {
  try {
    const result = await Contact.find();
    if (!result) {
      res.status(404).json({ message: "No Users" });
    }
    res.status(200).json({ result });
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    await User.deleteOne({ _id: id });
    return res.status(200).json({ message: "Data deleted successfully" });
  } catch (error) {
    return res.status(404).json({ error });
  }
};

const getusers = async (req, res, next) => {
  try {
    const result = await User.find();
    if (!result || result.length === 0) {
      return res.status(404).json({ message: "No Users found" });
    }
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
const updateUser = async (req, res, next) => {
  try {
    const id = req.params.id; // Ensure your route is set up to send the id as a parameter
    const data = req.body

    if(data.Password){
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(data.Password,saltRounds)
    }
    const updatedUser = await User.updateOne(
      { _id: id },
      { $set: data },
    );

    if (updatedUser.nModified === 0) {
      // If no document was modified, send a not found response
      return res.status(404).json({ message: "User not found or no changes made" });
    }

    return res.status(200).json({ message: "User updated successfully", updatedUser });
  } catch (error) {
    next(error);
  }
};

module.exports = updateUser;


module.exports = { add, product, getusers, getContacts, deleteUser, deleteMsg,updateUser};
