const net = require('net');
const connect = require('connect');

console.log("Connecting........");
const conn = connect();
conn.on("connect", () => {
  console.log('connection is made');
});
conn.on("data", (data) => {
  console.log('called data' , data);
});
conn.on("end", (data) => {
  console.log('the end',data);
});