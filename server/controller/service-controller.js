const AddProd = require("../model/add_prod");
const User = require("../model/user_model");
const Contact = require("../model/contact_model");

const add = async (req, res) => {
  try {
    const { prodImg, prodName, prodPrice, discountPrice, Description } =
      req.body;

    // Ensure required fields are provided
    if (!prodImg || !prodName || !prodPrice || !Description) {
      return res
        .status(400)
        .json({ msg: "All required fields must be provided" });
    }

    const product = new AddProd({
      prodImg,
      prodName,
      prodPrice,
      discountPrice,
      Description,
    });
    await product.save();
    res.status(200).json({ msg: "Product added successfully" });
  } catch (error) {
    console.log("error:", error);
    res
      .status(400)
      .json({ msg: "Product failed to add", error: error.message });
  }
};

const product = async (req, res) => {
  try {
    const response = await AddProd.find();
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

module.exports = { add, product, getusers, getContacts, deleteUser, deleteMsg };
