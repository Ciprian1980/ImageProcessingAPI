import express from 'express';
import routes from './routes/index';

const app = express();
const port = 3000;
const images = './cd0292-building-a-server-project-starter';

app.listen(port, () => {
  console.log(`server started at ${port}`);
})

app.use('/', routes);

