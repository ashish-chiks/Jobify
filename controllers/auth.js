import UserModel from "../db/userModel.js";
import { BadRequestError } from "../errors/index.js";

const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!email || !name || !password)
    throw new BadRequestError("Please provide all values");

  const userAlreadyExist = await UserModel.findOne({ email });
  if (userAlreadyExist) throw new BadRequestError("Email already in use");

  const user = await UserModel.create(req.body);
  const token = user.createJWT()
  res.status(200).json({ user, token });
};

const login = async (req, res) => {
  res.send("login user");
};

const updateUser = async (req, res) => {
  res.send("update user");
};

export { register, login, updateUser };
