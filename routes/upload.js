const cloudinary = require("cloudinary");

// config
cloudinary.config({
cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
api_key: process.env.CLOUDINARY_API_KEY,
api_secret: process.env.CLOUDINARY_API_SECRET,
});



// req.files.file.path
const upload = async (req, res) => {
 
    try {


        const body = req.body;

        console.log(body);



        res.send(req.body);

    }











catch(err){
console.log(err)

console.log('whatssssss happpend >>>> here')
res.status(400).json({message:err})


}


};

const express = require("express");
const router = express.Router();








const remove = (req, res) => {
let image_id = req.body.public_id;

cloudinary.uploader.destroy(image_id, (err, result) => {
if (err) return res.json({ success: false, err });
res.send('ok');
});

};



router.post("/upload" ,upload);
router.post("/removeimage", remove);

module.exports = router;