import { v2 as cloudinary } from "cloudinary";

const imagePath = process.argv[2];

// Return "https" URLs by setting secure: true
cloudinary.config({
  secure: true,
});

/////////////////////////
// Uploads an image file
/////////////////////////
const uploadImage = async () => {
  // Use the uploaded file's name as the asset's public ID and
  // allow overwriting the asset with new versions
  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
  };

  try {
    // Upload the image
    const result = await cloudinary.uploader.upload(imagePath, options);
    console.log(result.secure_url);
    return result.public_id;
  } catch (error) {
    console.error(error);
  }
};

uploadImage(imagePath);
