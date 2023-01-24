const jwt = require('jsonwebtoken');

// middleware to validate token (rutas protegidas)
const verifyToken = (req, res, next) => {
  if (
    req.method === 'POST' &&
    (req.url === '/users' || req.url === '/users/new-password')
  ) {
    next();
  } else {
    const token = req.header('auth-token');
    if (!token) return res.status(401).json({ msg: 'Acceso denegado' });
    try {
      const verified = jwt.verify(token, process.env.SECRET_KEY);
      req.user = verified;
      next();
    } catch (error) {
      res.status(400).json({ msg: 'token no es válido', error });
    }
  }
};

module.exports = verifyToken;
