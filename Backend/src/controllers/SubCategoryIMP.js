import SubCategory from "../modules/sub_category";
export const addSubCategory = async(req,res)=>{
    try{
            const{name,description,category} = req.body;
    const findname = await SubCategory.findOne({name});
    if(findname){
        return res.status(400).json({message:"The Sub_Category name already exist"})
    }
    const newSubcategory = new SubCategory({
        name,
        description,
        category
    });
    await newSubcategory.save();
    res.status(201).json({message:"SubCategory added successfully"});
    }
    catch(error){
        return res.status(500).json({message:"Internal Error"});
    }

}
export const deleteSubCategory = async(req,res)=>{
    const{id} = req.params;
    const deleteSubCategory = await SubCategory.findByIdAndDelete(id);
    if(!deleteSubCategory){
        return res.status(401).json({message:"SubCategory"})
    }
    res.status(200).json({message:"Deleted Successfully !"})
}