import express from 'express';
import cors from 'cors';

import { http404 } from './responses.ts';

// Clients
import { check as checkDB } from './services/postgres.ts';

// Middlewares
import { logger } from './middleware/logger.ts';

// Routers
import { default as metricsRouter } from './routers/metrics.router.ts';
import { default as reportsRouter } from './routers/reports.router.ts';
import { default as submissionRouter } from './routers/reports.router.ts';

const app = express();
const port = 3000;

app.use(cors());
app.use(logger);

app.use('/metrics', metricsRouter);
app.use('/reports', reportsRouter);
app.use('/submissions', submissionRouter);

app.get('*', (req, res) => {
  res.status(404).json(http404);
})

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`)
  await checkDB()
})