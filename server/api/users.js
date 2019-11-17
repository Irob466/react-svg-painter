const router = require("express").Router();

// GET /api/users
router.get("/", (req, res, next) => {
  // do a thing
});

// POST /api/users
router.post("/", (req, res, next) => {
  // do a thing
});

// PUT by id /api/users/id
router.put("/:id", (req, res, next) => {
  // do a thing
});

// DELETE by id /api/users/id
router.delete("/:id", (req, res, next) => {
  // do a thing
});

module.exports = router;
