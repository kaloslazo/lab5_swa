import { Kafka } from 'kafkajs'
import { EventPublisher } from '../../domain/ports/EventPublisher'

export class KafkaPublisher implements EventPublisher {
  private producer

  constructor(kafka: Kafka) {
    this.producer = kafka.producer()
  }

  async publish(event: string, payload: any) {
    await this.producer.connect()
    await this.producer.send({
      topic: event,
      messages: [ { value: JSON.stringify(payload) } ]
    })
  }
}