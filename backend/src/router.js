const express = require("express");

const router = express.Router();

const eventControllers = require("./controllers/eventControllers");

router.get("/event", eventControllers.browse);
router.get("/event/:id", eventControllers.read);
router.put("/event/:id", eventControllers.edit);
router.post("/event", eventControllers.add);
router.delete("/event/:id", eventControllers.destroy);

module.exports = router;
