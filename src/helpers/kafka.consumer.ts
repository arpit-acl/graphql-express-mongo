import { Kafka, Consumer as KafkaConsumer } from 'kafkajs';

// Create Kafka consumer instance
// const kafka = new Kafka({
//   clientId: 'my-consumer',
//   brokers: ['localhost:9092'] // Kafka broker(s) address
// });

// const consumer = kafka.consumer({ groupId: 'my-group' });

// export async function consumeMessages() {
//   try {
//     await consumer.connect();

//     // Subscribe to Kafka topic
//     await consumer.subscribe({ topic: 'my-topic', fromBeginning: true });

//     // Start consuming messages
//     await consumer.run({
//       eachMessage: async ({ topic, partition, message } : { topic : any , partition: any, message: any}) => {
//         console.log({
//           topic,
//           partition,
//           offset: message.offset,
//           value: message.value.toString(),
//         });
//       },
//     });
//   } catch (error) {
//     console.error('Error consuming messages:', error);
//   }
// }

