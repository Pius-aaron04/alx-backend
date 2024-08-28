// 4-redis_advanced_op.js

import { createClient, print } from 'redis';

const client = createClient();

client.on('error', (err) => {
  console.log(`Redis client not connected to server: ${err.message}`);
});

client.on('connect', () => console.log('Redis client connected to server.'));

// creates hash
const data = {
  Portland: 50,
  Seattle: 80,
  "New York": 20,
  Bogota: 20,
  cali: 40,
  Paris: 2
};

for (const [field, value] of Object.entries(data)){
  client.hset('HolbertonSchools', field, value, print);
}

// displays hash
client.hgetall('HolbertonSchools', (err, reply) => {
  if (err) {
    console.log(err);
  } else {
    console.log(reply);
  }
});
