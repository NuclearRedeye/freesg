import { http404, http501 } from "../responses.ts";

export async function notFound (req, res) : Promise<void> {
  res.status(501).json(http404);
};

export async function notImplemented (req, res) : Promise<void> {
  res.status(501).json(http501);
};