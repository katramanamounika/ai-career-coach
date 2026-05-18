const registerUser = (req, res) => {
  const { name, email, password } = req.body;

  res.json({
    message: "Register Successful",
    user: {
      name,
      email,
    },
  });
};

const loginUser = (req, res) => {
  const { email, password } = req.body;

  res.json({
    message: "Login Successful",
    email,
  });
};

module.exports = {
  registerUser,
  loginUser,
};