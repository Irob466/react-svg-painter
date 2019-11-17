const router = require("express").Router();

// actual routes
router.use("/users", require("./users"));

// error routes
router.use((req, res, next) => {
  const err = new Error("Route not found!");
  err.status = 404;
  next(err);
});

module.exports = router;
