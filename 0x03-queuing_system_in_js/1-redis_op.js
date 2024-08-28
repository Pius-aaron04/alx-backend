import { createClient, print } from 'redis';

const client = createClient();

// listen for 'error' event handle
client.on('error', err => console('Redis client not connected to the server: ' + err.message));

// listen for 'connect' event and confirms connection
client.on('connect', () => {
  console.log('Redis client connected to the server')
});

function setNewSchool(schoolName, value){
  client.set(schoolName, value, print);
}


function displaySchoolValue(schoolName){
  client.get(schoolName, (err, reply) => {
    if (err){
      console.log(err);
    } else {
      console.log(reply)
    }
  });
}

// function
displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
