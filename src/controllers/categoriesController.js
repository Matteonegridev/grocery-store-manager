import Inventory from "../mongoose/schema/Schema.js";

const getCategories = async (req, res) => {
  try {
    const findItems = await Inventory.find(req.sanitizedQuery);
    console.log(findItems);

    if (findItems.length === 0) {
      return res.status(404).send("There are no items yet");
    }

    const uniqueCategories = [...new Set(findItems.map((item) => item.category))];
    console.log(uniqueCategories);
    return res.render("partials/categories", { categories: uniqueCategories });
  } catch (error) {
    return res.send(error);
  }
};

export default getCategories;
