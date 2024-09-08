import app from "./app.js";
import cloudinary from "cloudinary"

const PORT = process.env.PORT||6666;
cloudinary.v2.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_SECRET_KEY
})

app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`);
})