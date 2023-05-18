const getProduct = (_, { id }) => {
  return {
    id,
    name: "Product 1",
    price: 100.16,
    description: "bla bla bla",
    image: "http://image.sas",
    createdAt: new Date().toISOString(),
  };
};

const getProducts = () => {
  return [];
};

module.exports = { getProduct, getProducts };
