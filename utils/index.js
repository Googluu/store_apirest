const passport = require("passport");

const { LocalStrategy } = require("./auth/strategies/local.strategy");
const JwtStrategy = require("./auth/strategies/jwt.strategy");
const { GQLLocalStrategy } = require("./auth/strategies/local-gql.strategy");

passport.use(LocalStrategy);
passport.use(JwtStrategy);
passport.use(GQLLocalStrategy);
