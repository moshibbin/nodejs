import * as http from 'http';

// Define the hostname and port
const hostname = '127.0.0.1';
const port = 3000;

// Create an HTTP server
const server = http.createServer((req, res) => {
  res.statusCode = 200; // HTTP status code 200 OK
  res.setHeader('Content-Type', 'text/plain'); // Response header
  res.end('Hello, moshibbin \n'); // Response body
});

// Start the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
