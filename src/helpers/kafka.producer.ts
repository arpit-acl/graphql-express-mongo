import { Kafka, Producer as KafkaProducer, Partitioners } from 'kafkajs';

// Create Kafka producer instance
// const kafka = new Kafka({
//   clientId: 'my-producer',
//   brokers: ['localhost:9092'] // Kafka broker(s) address
// });

// const producer = kafka.producer({createPartitioner: Partitioners.DefaultPartitioner });

// export async function produceMessage() {
//   try {
//     await producer.connect();

//     // Send a message to Kafka topic
//     await producer.send({
//       topic: 'my-topic',
//       messages: [
//         { value: 'Hello Kafka!' }
//       ],
//     });

//     console.log('Message sent successfully');
//   } catch (error) {
//     console.error('Error producing message:', error);
//   } finally {
//     await producer.disconnect();
//   }
// }

