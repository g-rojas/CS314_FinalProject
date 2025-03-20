const mongoose = require("mongoose");

const connectDB = async () => {
    try{
        const conn = await mongoose.connect("mongodb+srv://jarib042689:Elbatman101!@cluster0.oofez.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        //useFindAndModify: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
}catch (error) {
    console.log(`Error: ${error.message}`.red.bold);
    process.exit();
}
};

module.exports = connectDB;