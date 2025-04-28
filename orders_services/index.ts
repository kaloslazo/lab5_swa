import express from 'express'
import { CreateOrderUseCase } from './application/usecases/CreateOrder'
import { OrderPgRepo } from './infrastructure/repositories/OrderPgRepo'
import { KafkaPublisher } from './infrastructure/events/KafkaPublisher'
import { kafka } from './config/kafka'

const app = express()
app.use(express.json())

const orderRepo = new OrderPgRepo()
const publisher = new KafkaPublisher(kafka)
const createOrder = new CreateOrderUseCase(orderRepo, publisher)

app.post('/api/orders', async (req, res) => {
  try {
    const newOrder = await createOrder.execute(req.body)
    res.status(201).json(newOrder)
  } catch (e) {
    res.status(500).json({ error: 'Error creating order' })
  }
})

app.listen(3001, () => console.log('orders-service running on port 3001'))
