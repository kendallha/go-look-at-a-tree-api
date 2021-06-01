CREATE DATABASE treedata;

CREATE TABLE trees(
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  scientific_name VARCHAR(100) UNIQUE NOT NULL,
  region VARCHAR(255),
  average_height VARCHAR(100),
  lifespan VARCHAR(100),
  fact VARCHAR(1000),
  image VARCHAR(500) NOT NULL
);
