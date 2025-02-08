import { Router } from "express";

const metricsRouter = Router();

const http501 = {
  status: 501,
  message: 'Not Implemented'
}

metricsRouter.get('*', (req, res) => { 
  res.status(501).json(http501);
});

export default metricsRouter;