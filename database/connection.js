import mongoose from "mongoose"

export const connection = () =>{
    mongoose.connect(process.env.MONGO_URL,{
        dbName:"MERN_AUCTION_WEBSITE"
    }).then(()=>{
        console.log(`Connected to database`);
    }).catch((err)=>{console.log(`Error while connecting to database ${err}`);
    })
}