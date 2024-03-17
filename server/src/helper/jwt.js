const jwt = require('jsonwebtoken')

function createToken (user) {
    const secret = process.env.JWT_SECRET
    const payload = user
    const token = jwt.sign(payload, secret)
    return token
}

module.exports = createToken;