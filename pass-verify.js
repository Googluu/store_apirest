const bcrypt = require("bcrypt");

async function verifyPassword() {
  const myPassword = "pass 123 .con";
  const hash = "$2b$10$2US614XMHq/e2lHTgKKvBexfplIt6sCUBVmuAwX9Yzj5xGHeiLC1m";
  const isMatch = await bcrypt.compare(myPassword, hash);
  console.log(isMatch);
}

verifyPassword();
