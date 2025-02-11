import { Router } from "express";

import * as defaultController from "../controllers/defaults.controller.ts";
import * as metricsController from "../controllers/metrics.controller.ts";

const metricsRouter = Router();

metricsRouter.get('/', metricsController.getAll);
metricsRouter.get('/:metricId', metricsController.getOne);
metricsRouter.post('/:metricId', metricsController.createOne);
metricsRouter.delete('/:metricId', defaultController.notImplemented);

metricsRouter.get('*', defaultController.notFound);

export default metricsRouter;