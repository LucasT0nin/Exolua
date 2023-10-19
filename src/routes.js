const express = require("express");

const UserController = require("./controllers/UserController");
const AddressController = require("./controllers/AddressController");

const authMiddleware = require("./middlewares/auth");
const { upload } = require("./controllers/IMAGEPTController");
const IMAGEPTController = require("./controllers/IMAGEPTController");
const router = express.Router();

router.get("/users", authMiddleware, UserController.index);
router.post("/users", UserController.store);
router.put("/users/:user_id", UserController.update);
router.delete("/users/:user_id", UserController.delete);
router.post("/users/login", UserController.login);

router.use(authMiddleware);

router.get("/users/:user_id/address", AddressController.index);
router.post("/users/:user_id/address", AddressController.store);
router.delete("/users/:id/address", AddressController.delete);
router.put("/users/:id/address", AddressController.update);

router.post(
  "/users/:user_id/avatar",
  upload.single("avatar"),
  IMAGEPTController.uploadAvatar
);

const Delete = require("./controllers/DELETEIMG");

router.delete("/users/:user_id/id", Delete.delete);

module.exports = router;
