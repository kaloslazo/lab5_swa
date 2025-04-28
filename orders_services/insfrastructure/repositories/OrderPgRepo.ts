import { OrderRepository } from '../../domain/ports/OrderRepository'
import { Order } from '../../domain/entities/Order'
import { db } from '../../config/db'

export class OrderPgRepo implements OrderRepository {
  async create(order: Order) {
    await db('orders').insert(order)
    return order
  }

  async findById(id: string) {
    return db('orders').where({ id }).first()
  }

  async listByUser(userId: string) {
    return db('orders').where({ userId })
  }

  async updateStatus(id: string, status: Order['status']) {
    await db('orders').where({ id }).update({ status })
  }
}