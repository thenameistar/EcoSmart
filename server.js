const express = require('express');
const app = express();

app.use(express.static('public')); // Serve files from the 'public' directory

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
const chai = require('chai');
const expect = chai.expect;

describe('Login Function Tests', () => {
  it('should navigate to the dashboard on successful login', () => {
    expect(loginFunction('user', 'pass')).to.equal(true); // Assuming loginFunction returns true on success
  });
});
