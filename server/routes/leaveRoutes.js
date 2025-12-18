const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");
const ctrl = require("../controllers/leaveController");

router.post("/", auth, role("employee"), ctrl.createLeave);
router.get("/my-leaves", auth, role("employee"), ctrl.myLeaves);
router.get("/all", auth, role("admin"), ctrl.allLeaves);
router.put("/:id/status", auth, role("admin"), ctrl.updateStatus);

module.exports = router;
