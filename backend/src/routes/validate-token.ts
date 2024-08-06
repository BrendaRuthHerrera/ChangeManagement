import { Request, Response, NextFunction } from "express"
import jwt from 'jsonwebtoken';


const validateToken = (req: Request, res: Response, next: NextFunction) => {
    const headerToken = req.headers['authorization']
    console.log(headerToken)
    
    if(typeof headerToken === 'string' && headerToken.startsWith('Bearer ')) {
        // Tiene token 
        const bearerToken = headerToken.split(" ")[1];

       try {
          const tokenValid = jwt.verify(bearerToken, process.env.SECRET_KEY!)
          console.log(tokenValid)
          next();
        } catch (error) {
          res.status(400).json({
              error: 'token no valido'
          }) 
        }



    } else {
        res.status(400).json({
            error: 'Acceso denegado'
        })
    }

}

export default validateToken