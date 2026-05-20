const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");


// SIGNUP USER
const signupUser = async (req, res) => {

  try {

    const { name, email, password } = req.body;
    if (!name || !email || !password) {

  return res.status(400).json({
    message: "All fields are required",
  });

    }

    const existingUser = await User.findOne({
      email,
    });

    if (existingUser) {

      return res.status(400).json({
        message: "User already exists",
      });

    }

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(
      password,
      salt
    );

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
  message: "User registered successfully",

  user: {
    _id: user._id,
    name: user.name,
    email: user.email,
  },

    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};


// LOGIN USER
const loginUser = async (req, res) => {

  try {

    const { email, password } = req.body;
    if (!email || !password) {

  return res.status(400).json({
    message: "All fields are required",
  });

    }

    const user = await User.findOne({
      email,
    });

    if (!user) {

      return res.status(400).json({
        message: "Invalid email or password",
      });

    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {

      return res.status(400).json({
        message: "Invalid email or password",
      });

    }

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.status(200).json({
  message: "Login successful",

  token,

  user: {
    _id: user._id,
    name: user.name,
    email: user.email,
  },

    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};


// PROTECTED ROUTE
const getCurrentUser = async (req, res) => {

  try {

    // Find user by ID
    const user = await User.findById(req.user.id)
      .select("-password");

    // Send user data
    res.status(200).json(user);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};


module.exports = {
  signupUser,
  loginUser,
  getCurrentUser,
};