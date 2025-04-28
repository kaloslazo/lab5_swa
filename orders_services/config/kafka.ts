import { Kafka } from 'kafkajs'
export const kafka = new Kafka({ clientId: 'orders-service', brokers: ['localhost:9092'] })
