const { Router } = require("express");

const CustomerService = require("../services/customers.service");
const validatorHandler = require("../middlewares/validator.handler");
const {
  createCustomer,
  updateCustomer,
  findCustomerById,
} = require("../schemas/customer.schema");

const service = new CustomerService();

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const customer = await service.findAll();
    res.json(customer);
  } catch (error) {
    next(error);
  }
});

router.get(
  "/:id",
  validatorHandler(findCustomerById, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const customer = await service.findOne(id);
      res.json(customer);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/",
  validatorHandler(createCustomer, "body"),
  async (req, res, next) => {
    try {
      const body = req.body;
      const customer = await service.create(body);
      res.status(201).json(customer);
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  "/:id",
  validatorHandler(findCustomerById, "params"),
  validatorHandler(updateCustomer, "body"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const customer = await service.update(id, body);
      res.json(customer);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  "/:id",
  validatorHandler(findCustomerById, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const customer = await service.delete(id);
      res.status(204).json(customer);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
