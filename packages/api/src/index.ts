import express from 'express';

// Clients
import { check as checkDB } from './clients/postgres.ts';

// Middlewares
import { cors } from 'cors';
import { logger } from './middleware/logger.ts';

// Routers
import { default as metricsRouter } from './routers/metrics-router.ts';

const app = express();
const port = 3000;

app.use(cors());
app.use(logger);

app.use('/metrics', metricsRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`)
  await checkDB()
})