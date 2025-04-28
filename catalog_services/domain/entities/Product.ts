export interface Product {
    id: string;
    name: string;
    description?: string;
    price: number;
    source: 'amazon' | 'bestbuy' | 'supplier';
    providerId?: string;
    url?: string;
    weightKg?: number;
    stockEstimate?: number;
    lastSynced: Date;
  }
  