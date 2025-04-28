import { OrderRepository } from '../../domain/ports/OrderRepository'
import { EventPublisher } from '../../domain/ports/EventPublisher'
import { Order } from '../../domain/entities/Order'
import { v4 as uuidv4 } from 'uuid'

export class CreateOrderUseCase {
  constructor(
    private repo: OrderRepository,
    private eventPublisher: EventPublisher
  ) {}

  async execute(data: Omit<Order, 'id' | 'status' | 'createdAt'>): Promise<Order> {
    const newOrder: Order = {
      ...data,
      id: uuidv4(),
      status: 'created',
      createdAt: new Date()
    }

    await this.repo.create(newOrder)
    await this.eventPublisher.publish('order.created', newOrder)

    return newOrder
  }
}
