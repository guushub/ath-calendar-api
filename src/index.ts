// Node module import
import * as http from 'http';
import * as google from 'googleapis';
import * as googleAuth from 'google-auth-library';

// Custom module import
import {TestClass} from './test/test';

const port = 8080;
const test = new TestClass(port);

http.createServer(function (req, res) {
  res.write(`Server on port ${test.val}`); //write a response to the client
  res.end(); //end the response
}).listen(port);

