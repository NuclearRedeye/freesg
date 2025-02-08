import express from 'express';
import { check as checkDB } from './clients/postgres.ts';

import { logger } from './middleware/logger.ts';

import { default as metricsRouter } from './routers/metrics-router.ts';

const app = express();
const port = 3000;

app.use(logger);

app.use('/metrics', metricsRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`)
  await checkDB()
})