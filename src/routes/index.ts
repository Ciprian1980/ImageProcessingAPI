import express from "express";
const fs = require('fs');
const path = require('path');
const sharp = require("sharp");
const routes = express.Router();
const app = express();
const fileUpload = require('express-fileupload'); 

routes.get('/images', (req, res) => {
  res.send('Processing image');
  const getMetadata = async (): Promise<any> => {
    try {
      const imageFileSource = path.resolve(__dirname, './api/fjord.jpg')
      const imageFromFile = fs.readFileSync(imageFileSource)
      if (imageFromFile) {
        console.log('fileReadSuccesfull', imageFromFile)
      }  
    } catch (error) {
      console.log(`An error occurred during processing: ${error}`);
    }
  }
  getMetadata();

  async function resizeImage() {
    try {
      const filePath = express.static(path.join(__dirname, './api/fjord.jpg'));
      const metadata = await sharp(fs.openSync(filePath)).metadata();
      console.log(metadata)
      await sharp(metadata)
        .resize({
          width: 150,
          height: 97
        })
        .toFormat("jpeg", { mozjpeg: true })
        .toFile("./cd0292-building-a-server-project-starter/images/fjord-resized-compressed.jpeg");
    } catch (error) {
      console.log(error);
    }
  }
  
  resizeImage();
})




export default routes;