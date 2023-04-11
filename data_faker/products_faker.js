const { faker } = require("@faker-js/faker");

function createRandomProducts() {
  return {
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: parseInt(faker.commerce.price(), 10),
    image: faker.image.imageUrl(),
    isBlock: faker.datatype.boolean(),
  };
}

module.exports = createRandomProducts;
