import { Router } from "express";

import { http501 } from "../responses.ts";

const reportsRouter = Router();

reportsRouter.get('/', async (req, res) => {
  res.status(501).json(http501);
});

reportsRouter.get('/:reportId', async (req, res) => {
  res.status(501).json(http501);
});

reportsRouter.post('', async (req, res) => {
  res.status(501).json(http501);
});

reportsRouter.delete('/:reportId', async (req, res) => {
  res.status(501).json(http501);
});

reportsRouter.get('*', (req, res) => { 
  res.status(501).json(http501);
});

export default reportsRouter;