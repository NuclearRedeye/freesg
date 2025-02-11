import type { Metric } from '../../../types/index.ts';

import * as metricsService from '../services/metric.ts';

export async function getAll(req, res): Promise<void> {
  const metrics = await metricsService.getAll();
  res.status(200).json(metrics);
}

export async function getOne(req, res): Promise<void> {
  const id = req.params.metricId;
  const metric = await metricsService.getOne(id);
  if (metric === null) {
    res.status(404).json(metric);
  } else {
    res.status(200).json(metric);
  }
}

export async function createOne(req, res): Promise<void> {
  const metricData: Metric = {
    name: req.body.name,
    description: req.body.description,
  }
  const metric = await metricsService.create(metricData);
  if (metric === null) {
    res.status(400).json(metric);
  } else {
    res.status(200).json(metric);
  }
}