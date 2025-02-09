INSERT INTO freesg.metric (id, name, description) VALUES ('d2a7d27f-2ea3-40d8-8a4e-7a5fab46ee55', 'headcount', 'total number of employees');
INSERT INTO freesg.metric (id, name, description) VALUES ('9cf3ca06-0ef8-4ca7-97de-9980d3af5da8', 'Emissions - Scope 1', 'Scope 1 Carbon Emissions');
INSERT INTO freesg.metric (id, name, description) VALUES ('2b7f559f-3f3e-4488-ad17-f04cfa9c1aa6', 'Emissions - Scope 2', 'Scope 2 Carbon Emissions');
INSERT INTO freesg.metric (id, name, description) VALUES ('ba3ffd5c-e895-4123-8fdd-13d4d5ad4825', 'Emissions - Scope 3', 'Scope 2 Carbon Emissions');

INSERT INTO freesg.report (id, name, description) VALUES ('d94dc702-b9ce-440f-bab1-3f252640451d', 'ACME Emissions Report', 'Baseline emissions report, suitable for most disclosure use cases');
INSERT INTO freesg.report (id, name, description) VALUES ('02fa33f6-f6e4-4f1a-b506-104f43aa45fe', 'ACME Governance Report', 'Baseline governance report');

INSERT INTO freesg.report_metric (report_id, metric_id) VALUES ('d94dc702-b9ce-440f-bab1-3f252640451d', '9cf3ca06-0ef8-4ca7-97de-9980d3af5da8');
INSERT INTO freesg.report_metric (report_id, metric_id) VALUES ('d94dc702-b9ce-440f-bab1-3f252640451d', '2b7f559f-3f3e-4488-ad17-f04cfa9c1aa6');
INSERT INTO freesg.report_metric (report_id, metric_id) VALUES ('d94dc702-b9ce-440f-bab1-3f252640451d', 'ba3ffd5c-e895-4123-8fdd-13d4d5ad4825');

INSERT INTO freesg.report_metric (report_id, metric_id) VALUES ('02fa33f6-f6e4-4f1a-b506-104f43aa45fe', 'd2a7d27f-2ea3-40d8-8a4e-7a5fab46ee55');