CREATE TABLE visits (
  id serial PRIMARY KEY,
  at timestamp DEFAULT now()
);
