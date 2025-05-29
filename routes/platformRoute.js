const express = require("express");
const multer = require("multer");
const sharp = require("sharp");

const platformController = require("./../controllers/platformController");
const authController = require("./../controllers/authController");

const upload = multer({ dest: "public/images/platforms" });

const router = express.Router();

//protect all the routes below

//router.use(authController.protect);

//router.use(authController.restrictTo("admin", "user"));

router
  .route("/")
  .get(platformController.getAllPlatforms)
  .post(
    authController.protect,
    authController.restrictTo("admin","user","creator"),
    platformController.uploadPlatformImage,
    platformController.resizePlatformImage,
    platformController.createPlatform
  );

router
  .route("/:id")
  .get(platformController.getAllPlatforms)
  .patch(
    authController.protect,
    authController.restrictTo("admin","user","creator"),
    platformController.uploadPlatformImage,
    platformController.resizePlatformImage,
    platformController.updatePlatform
  )
  .delete(
    authController.protect,
    authController.restrictTo("admin","user","creator"),
    platformController.deletePlatform
  );

module.exports = router;
