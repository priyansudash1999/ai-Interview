import mongoose from "mongoose";

export const connectDb = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('Db connected')
    } catch (error) {
        console.log(`Getting error ${error}`)
    }
}
