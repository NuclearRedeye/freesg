import express from 'express';
import { testDB } from './clients/postgres.ts';

import { logger } from './middleware/logger.ts';

const app = express();
const port = 3000;

app.use(logger);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`)
  await testDB()
})