const jwt = require("jsonwebtoken");

const secret = "mydog";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY4MjM0OTczOH0.rDiBCzU8jFJ8O66zBUo47fmiMt5gqQbj2nCzhuGGHMg";
function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

const payload = verifyToken(token, secret);
console.log(payload);
