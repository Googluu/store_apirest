const { Router } = require("express");

const CategoriesService = require("../services/categories.service");
const validatorHandler = require("../middlewares/validator.handler");
const {
  createCategory,
  updateCategory,
  findCategoryById,
} = require("../schemas/categories.schema");

const router = Router();
const service = new CategoriesService();

router.get("/", async (req, res, next) => {
  try {
    const category = await service.findAll();
    res.json(category);
  } catch (error) {
    next(error);
  }
});

router.get(
  "/:id",
  validatorHandler(findCategoryById, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const category = await service.findOne(id);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/",
  validatorHandler(createCategory, "body"),
  async (req, res, next) => {
    try {
      const body = req.body;
      const category = await service.create(body);
      res.status(201).json(category);
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  "/:id",
  validatorHandler(findCategoryById, "params"),
  validatorHandler(updateCategory, "body"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const category = await service.update(id, body);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  "/:id",
  validatorHandler(findCategoryById, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const category = await service.delete(id);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
