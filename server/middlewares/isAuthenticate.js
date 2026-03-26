import jwt from "jsonwebtoken"

const isAuthenticate =  async(req, res, next) => {
    try {
        let {token} = req.cookies
        if(!token){
            return res.status(400).json({
                message: "Token not found"
            })
        }
        const verifyToken = jwt.verify(token, process.env.JWT_SECRET)
        if(!verifyToken){
            return res.status(400).json({
                message: "Invalid token"
            })
        }
        req.userId = verifyToken.userId
        next()
    } catch (error) {
        return res.status(404).json({
            message: "isAuthenicate Error",
            error
        })
    }
}

export default isAuthenticate