const { Router } = require("express");

const UsersService = require("../services/users.service");
const validatorHandler = require("../middlewares/validator.handler");
const {
  createUser,
  updateUser,
  findUserById,
} = require("../schemas/users.schema");

const router = Router();
const service = new UsersService();

router.get("/", async (req, res) => {
  const users = await service.findAll();
  res.json(users);
});

router.get("/:id", validatorHandler(findUserById, params), async (req, res) => {
  const { id } = req.params;
  const user = await service.findOne(id);
  res.json(user);
});

router.post("/", validatorHandler(createUser, body), async (req, res) => {
  const body = req.body;
  const user = await service.create(body);
  res.status(201).json(user);
});

router.patch(
  "/:id",
  validatorHandler(findUserById, params),
  validatorHandler(updateUser, body),
  async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const user = await service.update(id, body);
    res.json(user);
  }
);

router.delete(
  "/:id",
  validatorHandler(findUserById, params),
  async (req, res) => {
    const { id } = req.params;
    const user = await service.delete(id);
    res.status(204).json(user);
  }
);

module.exports = router;
