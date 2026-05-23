const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");


// SIGNUP USER
const signupUser = async (req, res) => {

  try {

    const { name, email, password } = req.body;
    if (!name || !email || !password) {

  return res.status(400).json({
    success: false,
    message: "All fields are required",
  });

    }

    const existingUser = await User.findOne({
      email,
    });

    if (existingUser) {

      return res.status(400).json({
        success: false,
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
      success: true,
      message: "User registered successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });

  } catch (error) {

    res.status(500).json({
      success: false,
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
    success: false,
    message: "All fields are required",
  });

    }

    const user = await User.findOne({
      email,
    });

    if (!user) {

      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });

    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {

      return res.status(400).json({
        success: false,
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
    success: true,
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
      success: false,
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
        success: false,
      message: error.message,
    });

  }

};
const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User verified successfully",
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};
const resetPassword = async (req, res) => {

  try {

    const { email, newPassword } = req.body;

    // Check fields
    if (!email || !newPassword) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Find user
    const user = await User.findOne({ email });

    // User not found
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Hash new password
    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(newPassword, salt);

    // Update password
    user.password = hashedPassword;

    await user.save();

    res.status(200).json({
      success: true,
      message: "Password reset successful",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

module.exports = {
  signupUser,
  loginUser,
  getCurrentUser,
  forgotPassword,
  resetPassword,
};