import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/satyam_web_studio');
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(`MongoDB Connection Error: ${error.message}`);
    // If local MongoDB service is not started, we won't crash the server outright, 
    // but log a clear helpful notice for developers
    console.warn('Warning: Server will continue, but database features require MongoDB running.');
  }
};

export default connectDB;
