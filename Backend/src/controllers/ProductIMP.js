import Product from "../modules/product.js";
export const addProduct = async (req,res)=>{
    try{
        const{name,description,image,price,category,subCategory} = req.body;
        const newproduct = new Product({
            name,
            description,
            image,
            price,
            category,
            subCategory
        });
        await newproduct.save();
        res.status(200).json({message:"New Product added succesfully"});

    }
    catch(error){
        return res.status(500).json({message:"Couldnt save the product"})
    }

}
export const deleteProduct = async(req,res)=>{
    try{
        const{id} = req.params;
        const deleteProduct = await Product.findByIdAndDelete(id);
        if(!deleteProduct){
            return res.status(400).json({message:"Deleted Succesfully"});
        }
        res.status(200).json({message:"DeletedProduct Sucessfully"});

    }catch(error){
        return res.status(500).json({message:"Couldnt delete the Product"});
    }
}