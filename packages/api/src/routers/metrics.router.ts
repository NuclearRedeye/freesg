import { Router } from "express";

import { http404, http501 } from "../responses.ts";

import * as metricsController from "../controller/metrics.ts";

const metricsRouter = Router();

metricsRouter.get('/', async (req, res) => {
  const metrics = await metricsController.getAll();
  res.status(200).json(metrics);
});

metricsRouter.get('/:metricId', async (req, res) => {
  const metric = await metricsController.getById(req.params.metricId);
  if (!metric) {
    res.status(404).json(http404);
  } else {
    res.status(200).json(metric);
  }
});

metricsRouter.post('/:metricId', async (req, res) => {
  res.status(501).json(http501);
});

metricsRouter.delete('/:metricId', async (req, res) => {
  res.status(501).json(http501);
});

metricsRouter.get('*', (req, res) => { 
  res.status(501).json(http501);
});

export default metricsRouter;