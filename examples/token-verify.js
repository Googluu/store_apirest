const jwt = require("jsonwebtoken");

const secret = "mydog";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lcjIiLCJpYXQiOjE2ODIzNzc3MDd9.w947S2AN_eS2HZv3MPReZGSTs5yQPzhU4CQ8xoU9dBQ";
function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

const payload = verifyToken(token, secret);
console.log(payload);
