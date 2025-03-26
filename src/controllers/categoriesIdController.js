import Inventory from "../mongoose/schema/Schema.js";

const viewCategories = async (req, res) => {
  const category = req.params.categoriesId;
  console.log("Requested category:", category);
  try {
    const findCategories = await Inventory.find({ category });

    return res.render("partials/categoriesId", {
      category: findCategories,
      parentPage: "/categories",
    });
  } catch (error) {
    return res.send(error);
  }
};

export default viewCategories;
