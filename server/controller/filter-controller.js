const Device = require("../model/add_prod");

const getProdByCat = async (req, res) => {
  try {
    const category = req.params.prodCategory;
    const data = await Device.find({ prodCategory: category });
    if (!data) {
      return res.status(404).json({ message: "no product found" });
    }
    return res.status(200).json({data})
  } catch (error) {
    return res.status(404).json({ error });
  }
};

module.exports = { getProdByCat };
