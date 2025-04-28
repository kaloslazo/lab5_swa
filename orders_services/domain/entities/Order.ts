export interface Order {
    id: string
    userId: string
    productId: string
    quantity: number
    subtotal: number
    importTax: number
    commission: number
    total: number
    status: 'created' | 'paid' | 'shipped' | 'delivered' | 'cancelled'
    createdAt: Date
  }