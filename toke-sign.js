const jwt = require("jsonwebtoken");

const secret = "mydog";
const payload = {
  sub: 1,
  role: "customer2",
};

function signToken(payload, secret) {
  return jwt.sign(payload, secret);
}

const token = signToken(payload, secret);
console.log(token);
