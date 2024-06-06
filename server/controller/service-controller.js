const AddProd = require("../model/add_prod")


const add = async (req, res) => {
    try {
        const { prodImg, prodName, prodPrice, discountPrice, Description } = req.body;
        
        // Ensure required fields are provided
        if (!prodImg || !prodName || !prodPrice || !Description) {  
            return res.status(400).json({ msg: "All required fields must be provided" });
        }

        const product = new AddProd({ prodImg, prodName, prodPrice, discountPrice, Description });
        await product.save();
        res.status(200).json({ msg: "Product added successfully" });
    } catch (error) {
        console.log("error:", error);
        res.status(400).json({ msg: "Product failed to add", error: error.message });
    }
};

const product = async(req,res) =>{
    try {
        const response = await AddProd.find()
        if(!response){
            res.status(400).json({msg:"Failed to fetch the products"})
        }
        res.status(200).json({msg:response})
    } catch (error) {
        console.log(error)
    }
}

module.exports= { add,product }