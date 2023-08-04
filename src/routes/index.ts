import express from "express";
const fs = require('fs');
const path = require('path');
const sharp = require("sharp");
const routes = express.Router();
const app = express();
const fileUpload = require('express-fileupload');
// const image = import('./api/fjord.jpg');

// routes.get('/', (req, res) => {
//   res.send('Main api route');
// })

// app.use(fileUpload());

// app.post('/upload', (req, res) => {
//   // We'll handle the image upload here
//   console.log('image:', image)
// });

routes.get('/images', (req, res) => {
  res.send('Processing image');
  console.log('image path is:', './api/fjord.jpeg');
  const getMetadata = async (): Promise<any> => {
    try {
      const filePath = express.static(path.join(__dirname, './api/fjord.jpg'));
      const metadata = await sharp(fs.openSync(filePath)).metadata();
      
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