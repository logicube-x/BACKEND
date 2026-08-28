const { default: mongoose } = require("mongoose")

const connectDb=async()=>{
    try {
        await mongoose.connect(
          "mongodb+srv://arshaminmay2006_db_user:Or8mwbRywQ2nEPDO@cohort-cluster.fwykjhh.mongodb.net/",
        );

        console.log("database connected");
    } catch (error) {
        console.log('failed to connect',error);
    }
}

module.exports=connectDb