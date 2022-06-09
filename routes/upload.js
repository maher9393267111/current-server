const cloudinary = require("cloudinary");

// config
cloudinary.config({
cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
api_key: process.env.CLOUDINARY_API_KEY,
api_secret: process.env.CLOUDINARY_API_SECRET,
});

upload = async (req, res) => {
    let result = await cloudinary.uploader.upload(req.body.image, {
        folder: "images-ecommerce",
      public_id: `${Date.now()}`,
      resource_type: "auto", // jpeg, png
    });
    res.json({
      public_id: result.public_id,
      url: result.secure_url,
    });
  };



  remove = (req, res) => {
    let image_id = req.body.public_id;
  
    cloudinary.uploader.destroy(image_id, (err, result) => {
      if (err) return res.json({ success: false, err });
      res.send("ok");
    });
  };



const express = require("express");
const router = express.Router();












router.post("/upload" ,upload);
router.post("/removeimage", remove);

module.exports = router;