CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  role TEXT CHECK (role IN ('client', 'supplier', 'admin')) DEFAULT 'client',
  created_at TIMESTAMP DEFAULT now()
);


CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  price NUMERIC(10, 2) NOT NULL,
  source TEXT CHECK (source IN ('amazon', 'bestbuy', 'supplier')) NOT NULL,
  provider_id UUID,
  url TEXT,
  stock_estimate INT,
  weight_kg NUMERIC(6,2),
  last_synced TIMESTAMP DEFAULT now()
);
