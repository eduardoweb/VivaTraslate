const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
/**
 * Should to send user Object
 * @param {*} user 
 */
const tokenSign = async (user) => {
  const sign = await jwt.sign(
    {
      _id: user._id,
      role: user.role
    },
    JWT_SECRET,
    {
      expiresIn: "2h",
    }
  );

  return sign
};

/**
 * Should to send the tokenJwt
 * @param {*} tokenJwt 
 * @returns 
 */
const verifyToken = async (tokenJwt) => {
  try {
    return jwt.verify(tokenJwt, JWT_SECRET)
  } catch (e) {
    return null
  }
};

module.exports = { tokenSign, verifyToken }
