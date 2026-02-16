import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (filePath) => {
  try {
    const uploadResult = await cloudinary.uploader.upload(filePath, {
      folder: "chat-application",
      resource_type: "auto",
    });

    // Delete local file after upload
    fs.unlinkSync(filePath);

    return uploadResult.secure_url;
  } catch (error) {
    // Ensure file cleanup even if upload fails
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
    console.error("Cloudinary upload error:", error);
    return null;
  }
};

export default uploadOnCloudinary;