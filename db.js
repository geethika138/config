import mongoose from 'mongoose'
import chalk from 'chalk'
const ConnectDB=async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URL)
        console.log(chalk.bgGreenBright('MongoDB Connected'))
    }catch(error)
    {
        console.log('mongoose error ${error}')
    }
}
export default ConnectDB


























