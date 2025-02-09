import User from "../models/User.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const SECRET = process.env.JWT_нпSECRET || 'BASICSECRET'

export default {
    register(userData){
       return User.create(userData)
    },
    async login(email, password){

        //Check user exists
        const user = await User.findOne({email})
        if(!user){
            throw new Error('Invalid email or password!')
        }

        //Check password is correct
        const isValid = await bcrypt.compare(password, user.password)
        if(!isValid) {
            throw new Error('Invalid email or password')
        }

        //Generate token
        const playload = {
            id:user.id,
            email: user.email,
        }

        //TODO: Use async option
        const token = jwt.sign(playload, SECRET, {expiresIn: '2h'})

        //return token


        return token
    }
}