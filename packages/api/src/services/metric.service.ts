import type { Metric } from "../../../types/src/metric.ts";

import { query } from "../clients/postgres.client.ts";

export async function getAll(): Promise<Metric[]> {
  const retVal: Metric[] = [];

  const queryString = "SELECT * FROM metric;";
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
};

export async function getOne(id: string): Promise<Metric | null> {
  const queryString = "SELECT * FROM metric WHERE id = $1;";
  const metric = await query(queryString, [id]);

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
};

export async function create(metric: Metric): Promise<Metric | null> {
  const queryString = 'INSERT INTO metric (name, description) VALUES ($1, $2) RETURNING *';
  const queryValues = [metric.name, metric.description];
  const newMetric = await query(queryString, queryValues);
  if (newMetric.rows.length === 0) {
    return null;
  } else {
    return { 
      id: newMetric.rows[0].id,
      name: newMetric.rows[0].name,
      description: newMetric.rows[0].description,
      createdAt: newMetric.rows[0].created_at,
      updatedAt: newMetric.rows[0].updated_at,
    };
  }
}