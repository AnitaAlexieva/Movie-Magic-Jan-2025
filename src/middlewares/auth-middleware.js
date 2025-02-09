import jwt from 'jsonwebtoken'

const SECRET = process.env.JWT_нпSECRET || 'BASICSECRET'

export const authMiddleware = (req, res, next) =>{
    console.log(req.url)
    //Get token
    const token = req.cookies['auth']

    if(!token){
        return next()
    }
    

    //Validate token

    try{
        const decodedToken = jwt.verify(token, SECRET)

        //Attach decoded token to request
        req.user = decodedToken


        next()

    }catch(err){
        //TODO: invalid token
    }

    //DONT Forget guest users

}