const bcrypt = require("bcrypt");

async function hashPassword() {
  const myPassword = "pass 123 .con";
  const hash = await bcrypt.hash(myPassword, 10);
  console.log(hash);
}

hashPassword();
