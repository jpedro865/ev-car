// Importing Request, Response and NextFuction from express dependencie
import { Request, Response, NextFunction } from 'express';

require('dotenv').config(); // Calling .env file

// Calling an intance of jsonwebtoken
const jwt = require('jsonwebtoken');

// Fonction that checks if the user token is valid
function authenticateJWT(req: Request, res: Response, next: NextFunction) {
// recovery of the token in header without the bearer
  const token = req.headers.authorization?.split(' ')[1];
  // verification of the existence of the token
  if (!token) {
    res.status(401).send('No token found');
  } else {
    // verification of the validity of the token thanks to the public key
    jwt.verify(token, process.env.SECRET_KEY, (err: any, data: any) => {
      if (err) {
        res.status(401).send(`Sorry, there seems to be an error: ${err}`);
      } else {
        req.body.data = data;
        next();
      }
    });
  }
}

export default authenticateJWT; // Exporting authenticateJWT
