import { Router } from "express";

import { http404, http501 } from "../responses.ts";

const submissionRouter = Router();

submissionRouter.get('/', async (req, res) => {
  res.status(501).json(http501);
});

submissionRouter.get('/:submissionId', async (req, res) => {
  res.status(501).json(http501);
});

submissionRouter.post('', async (req, res) => {
  res.status(501).json(http501);
});

submissionRouter.delete('/:submissionId', async (req, res) => {
  res.status(501).json(http501);
});

submissionRouter.get('*', (req, res) => { 
  res.status(501).json(http404);
});

export default submissionRouter;