const AuthButton = ({
  text,
  loadingText,
  loading,
  type = "button",
}) => {
  return (
    <button
      type={type}
      disabled={loading}
      className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-black py-3 rounded-xl font-semibold text-lg hover:scale-105 transition duration-300"
    >
      {loading ? loadingText : text}
    </button>
  );
};

export default AuthButton;