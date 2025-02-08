import type { Metric } from '../../../types/index.ts';

import { query } from '../clients/postgres.ts';

export async function getAll(): Promise<Metric[]> {
  const retVal: Metric[] = [];
  const queryString = 'SELECT * FROM metric';
  const metrics = await query(queryString);
  for (const metric of metrics.rows) {
    retVal.push({
      id: metric.id,
      name: metric.name,
      description: metric.description,
      createdAt: metric.created_at,
      updatedAt: metric.updated_at,
    });
  }
  return retVal;
}

export async function getById(id: string): Promise<Metric | null> {
  const queryString = 'SELECT * FROM metric WHERE id = $1';
  const queryValues = [id];
  const metric = await query(queryString, queryValues);
  if (metric.rows.length === 0) {
    return null;
  } else {
    return {
      id: metric.rows[0].id,
      name: metric.rows[0].name,
      description: metric.rows[0].description,
      createdAt: metric.rows[0].created_at,
      updatedAt: metric.rows[0].updated_at,
    };
  }
}