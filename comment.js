// Create web server with Node.js, and then use the skillsMember function to display the skills of the member.
// The output should look like this:
// The skills of John Doe are JavaScript, React, Node.

// Path: member.js
function skillsMember() {
  return {
    name: 'John Doe',
    skills: ['JavaScript', 'React', 'Node']
  }
}

module.exports = skillsMember;

// Path: comment.js
const http = require('http');
const skillsMember = require('./member');

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(`The skills of ${skillsMember().name} are ${skillsMember().skills.join(', ')}.`);
  res.end();
}).listen(8080);

// Run the code
// node comment.js
// Output: The skills of John Doe are JavaScript, React, Node.