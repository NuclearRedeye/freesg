import { Router } from "express";

import * as defaultController from "../controller/defaults.ts";
import * as metricsController from "../controller/metrics.ts";

const metricsRouter = Router();

metricsRouter.get('/', metricsController.getAll);
metricsRouter.get('/:metricId', metricsController.getOne);
metricsRouter.post('/:metricId', metricsController.createOne);
metricsRouter.delete('/:metricId', defaultController.notImplemented);

metricsRouter.get('*', defaultController.notFound);

export default metricsRouter;