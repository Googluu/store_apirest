const { Router } = require("express");
const passport = require("passport");

const OrderService = require("../services/orders.service");

const service = new OrderService();

const router = Router();

router.get(
  "/my-orders",
  passport.authenticate("jwt", { session: false }),
  async (req, res, next) => {
    try {
      const user = req.user;
      const orders = await service.findByUser(user.sub);
      res.json(orders);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
