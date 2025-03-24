// Middleware to sanitize query parameters
const sanitizeItem = (req, res, next) => {
  const allowedFilters = ["name", "category", "quantity", "price"];
  const sanitizedQuery = {};

  // Only allow whitelisted fields
  for (const key of allowedFilters) {
    if (req.query[key]) {
      sanitizedQuery[key] = req.query[key];
    }
  }

  req.sanitizedQuery = sanitizedQuery;
  next();
};

export default sanitizeItem;
