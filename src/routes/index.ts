import express from "express";
const routes = express.Router();

routes.get('/', (req, res) => {
  res.send('main api route');
})

routes.get('/images', (req, res) => {
  res.send('Processing image')
})


export default routes;