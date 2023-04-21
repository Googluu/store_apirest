"use strict";

const { CategorySchema, CATEGORY_TABLE } = require("../models/category.model");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.drop(CATEGORY_TABLE);
  },
};
