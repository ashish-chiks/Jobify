import mongoose from "mongoose";
import validator from "validator";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please provide a email"],
    validate: {
      validator: validator.isEmail,
      message: "Please provide a valid email",
    },
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 5,
  },
  lastname: {
    type: String,
    trim: true,
    minlength: 3,
    maxlength: 20,
  },
  location: {
    type: String,
    trim: true,
    maxlength: 50,
  },
});

const userModel = mongoose.Model("User", UserSchema);
export default userModel;
