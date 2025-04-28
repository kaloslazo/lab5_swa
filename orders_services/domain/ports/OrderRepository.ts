export interface OrderRepository {
    create(order: Order): Promise<Order>
    findById(id: string): Promise<Order | null>
    listByUser(userId: string): Promise<Order[]>
    updateStatus(id: string, status: Order['status']): Promise<void>
  }