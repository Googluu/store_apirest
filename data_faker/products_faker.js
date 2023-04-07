const { faker } = require("@faker-js/faker");

function createRandomProducts() {
  return {
    name: faker.commerce.productName(),
    price: parseInt(faker.commerce.price(), 10),
    image: faker.image.imageUrl(),
  };
}

module.exports = createRandomProducts;