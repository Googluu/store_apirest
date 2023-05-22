const { RegularExpression } = require("graphql-scalars");

const {
  getProduct,
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getProductsByCategory,
} = require("./product.resolvers");
const { login } = require("./auth.resolvers");
const {
  addCategory,
  getCategory,
  getAllCategory,
} = require("./category.resolvers");

const CategoryNameType = new RegularExpression(
  "CategoryNameType",
  /^[a-zA-Z0-9]{3,8}$/
);

const resolvers = {
  Query: {
    hello: () => "Hola mundillo",
    getPerson: (_, { name, age }) =>
      `Hello, my name is ${name}, I'm ${age} years old`,
    getInt: (_, { age }) => age,
    getFloat: (_, { price }) => price,
    getString: () => "palabra",
    getBoolean: () => true,
    getID: () => "1212",
    getNumbers: (_, { numbers }) => numbers,
    // Products
    product: getProduct,
    products: getProducts,
    category: getCategory,
    categories: getAllCategory,
  },
  Mutation: {
    login,
    addProduct,
    updateProduct,
    deleteProduct,
    addCategory,
  },
  CategoryNameType,
  Category: {
    products: getProductsByCategory,
  },
};

module.exports = resolvers;
