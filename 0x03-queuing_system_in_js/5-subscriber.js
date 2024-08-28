// 5-subscriber.js

import { createClient, print } from 'redis';

const subscriber = createClient();

subscriber.on('error', (err) => {
  console.log(`Redis subscriber not connected to server: ${err.message}`);
});

subscriber.on('connect', () => console.log('Redis subscriber connected to server.'));

// subscribes to channel

subscriber.subscribe('holberton school channel');

// handle message recieved from the channel
subscriber.on('message', (channel, message) => {
  console.log(message);
  if (message === 'KILL_SERVER') {
    subscriber.unsubscribe('holberton school');
    subscriber.quit()
  }
});
