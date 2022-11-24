import  mongoose  from "mongoose";




const Connection =async(username,password)=>{
    const URL=`mongodb://${username}:${password}@chatapp-shard-00-00.dmqtx.mongodb.net:27017,chatapp-shard-00-01.dmqtx.mongodb.net:27017,chatapp-shard-00-02.dmqtx.mongodb.net:27017/Whatsapp?ssl=true&replicaSet=atlas-b4e4af-shard-0&authSource=admin&retryWrites=true&w=majority`
try{ 
     await mongoose.connect(URL,{useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false});
    console.log('Database Connected Succesfully');
}
catch(error){
    console.log("Error while connecting to mongodb",error.message)
}
}


export default Connection;