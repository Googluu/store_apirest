const { Strategy, ExtractJwt } = require("passport-jwt");

const { config } = require("../../../config/config");

var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.jwtSecret;

const JwtStrategy = new Strategy(opts, (jwt_payload, done) => {
  return done(null, jwt_payload);
});

module.exports = JwtStrategy;
