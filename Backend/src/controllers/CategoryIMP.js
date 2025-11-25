import Category from "../modules/category.js";
export const addCategory = async (req, res) => {
    try {
        const { name, description, image, status } = req.body;

        const existingCategory = await Category.findOne({ name });
        if (existingCategory) {
            return res.status(400).json({ message: "Category already exists" });
        }

        const newCategory = new Category({
            name,
            description,
            image,
            status: status 
        });

        await newCategory.save();
        res.status(201).json({ message: "Category added successfully", category: newCategory });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};
export const updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, image, status } = req.body;

        const updatedCategory = await Category.findByIdAndUpdate(
            id,
            { name, description, image, status },
            { new: true }
        );

        if (!updatedCategory) {
            return res.status(404).json({ message: "Category not found" });
        }

        res.status(200).json({ message: "Category updated successfully", category: updatedCategory });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};
export const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        
        const deletedCategory = await Category.findByIdAndDelete(id);

        if (!deletedCategory) {
            return res.status(404).json({ message: "Category not found" });
        }

        res.status(200).json({ message: "Category deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};
export const changeStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body; 

        if (!["active", "inactive"].includes(status)) {
             return res.status(400).json({ message: "Invalid status value" });
        }

        const updatedCategory = await Category.findByIdAndUpdate(
            id,
            { status },
            { new: true }
        );

        if (!updatedCategory) {
            return res.status(404).json({ message: "Category not found" });
        }

        res.status(200).json({ message: "Category status updated", category: updatedCategory });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};