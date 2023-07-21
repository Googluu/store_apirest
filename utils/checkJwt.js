const { unauthorized } = require("@hapi/boom");

async function checktJwtGql(context) {
  const { user } = await context.authenticate("jwt", { session: false });
  if (!user) throw unauthorized(`jwt is not valid`);
  return user;
}

module.exports = { checktJwtGql };
