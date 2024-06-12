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

const getProdById =async(req,res)=>{
  try {
    const id = req.params.id
    const data = await Device.findById(id)
    if(data){
      return res.status(200).json({data})
    }
    return res.status(404).json({message:"product not found"})
  } catch (error) {
    console.log(error)
  }
}

module.exports = { getProdByCat , getProdById};
