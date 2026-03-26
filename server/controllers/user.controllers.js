import UserModel from "../models/user.models.js"

export const getCurrentUser = async(req, res) => {
    try {
        const userId = req.userId
        const user = await UserModel.findById(userId)
        if(!user){
            return res.status(404).json({
                message: "User not found"
            })
        }
        return res.status(200).json({
            message: "Got the user",
            user
        })
    } catch (error) {
        return res.status(500).json({
            message: "Error while getting current user",
            error
        })
    }
}