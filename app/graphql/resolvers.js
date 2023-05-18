const { getProduct, getProducts, addProduct } = require("./product.resolvers");

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
    addProduct,
  },
};

module.exports = resolvers;
