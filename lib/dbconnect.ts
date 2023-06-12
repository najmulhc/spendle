import mongoose from 'mongoose'
async function connectToMongoDB() {
  try {
    const connectionString  =  process.env.MONGODB_CONNECTION_STRING  // Replace with your actual connection string

    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

export default connectToMongoDB;