const {
  getProduct,
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("./product.resolvers");
const { login } = require("./auth.resolvers");

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
  },
  Mutation: {
    login,
    addProduct,
    updateProduct,
    deleteProduct,
  },
};

module.exports = resolvers;
