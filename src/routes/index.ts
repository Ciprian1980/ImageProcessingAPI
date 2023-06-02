import express from "express";
const sharp = require("sharp");
const routes = express.Router();

routes.get('/', (req, res) => {
  res.send('Main api route');
})

routes.get('/images', (req, res) => {
  res.send('Processing image');
  const getMetadata = async (): Promise<any> => {
    try {
      const metadata = await sharp('../cd0292-building-a-server-project-starter/images/encenadaport.jpg').metadata();
      console.log(metadata);
    } catch (error) {
      console.log(`An error occurred during processing: ${error}`);
    }
  }
  getMetadata();
})


export default routes;