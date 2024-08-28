// 5-publisher.js

import { createClient, print } from 'redis';

const publisher = createClient();

// listens for error
publisher.on('error', (err) => {
  console.log(`Redis client not connected to server: ${err.message}`);
});

publisher.on('connect', () => console.log('Redis client connected to server'));

// publishes message
function publishMessage(message, time) {
  setTimeout(() => {
    console.log('About to send ' + message);
    publisher.publish("holberton school channel", message);
  }, time);
}

// message publishing
publishMessage("Holberton Student #1 starts course", 100);
publishMessage("Holberton Student #2 starts course", 200);
publishMessage("KILL_SERVER", 300);
publishMessage("Holberton Student #3 starts course", 400);
