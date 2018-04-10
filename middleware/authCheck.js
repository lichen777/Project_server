const jwt = require('express-jwt');
const jwks = require('jwks-rsa');

const authCheck = jwt({
  secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        // YOUR-AUTH0-DOMAIN name e.g prosper.auth0.com
        jwksUri: "https://upkeep.auth0.com/.well-known/jwks.json"
    }),
    // This is the identifier we set when we created the API
    audience: 'upkeep',
    issuer: 'https://upkeep.auth0.com/',
    algorithms: ['RS256']
});
/**
 *  The Auth Checker middleware function.
 */
module.exports = authCheck;
