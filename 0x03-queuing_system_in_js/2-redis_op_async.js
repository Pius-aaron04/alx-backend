import { createClient, print } from 'redis';
import { promisify } from 'util';

const client = createClient();

// listen for 'error' event handle
client.on('error', err => console('Redis client not connected to the server: ' + err.message));

// listen for 'connect' event and confirms connection
client.on('connect', () => {
  console.log('Redis client connected to the server')
});


/**
 * set key value pair in the Redis database
 */

function setNewSchool(schoolName, value){
  client.set(schoolName, value, print);
}

// promisify the client get method

const getAsync = promisify(client.get).bind(client);

/**
 * Displays value the key passed as param
 * @param schoolName
 */

async function displaySchoolValue(schoolName){
  try{
    const value = await getAsync(schoolName);
    console.log(value);
  } catch (error) {
    console.log(error);
  }
}

// function calls
displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
