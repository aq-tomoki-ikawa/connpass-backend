import express from 'express';
import cors from 'cors';

const app = express();

app.use(
  cors({
    origin: '*',
  })
);

app.get('/', async (req, res) => {
  console.log(req.header);

  res.send(
    'This is version 1 of Express.js server running on Node.js LTS 18.12.1 version 12-17'
  );
});

app.listen(5000, () => {
  console.log('Express.js server is running on port 5000');
});
