import { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    navigate("/");
    alert("Account created successfully");
  };

  return (
    <div
      id="signup"
      className="container mx-auto h-screen w-screen flex flex-col bg-slate-800"
    >
      <Navbar />
      <div className="flex justify-center items-center flex-grow">
        <div className="bg-slate-400 h-[20rem] w-[25rem] p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl mb-4 font-primary">Create an Account</h1>
          <form className="flex flex-col mb-4" onSubmit={handleLogin}>
            <input
              autoComplete="on"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-gray-200 mb-4 p-2 rounded-lg"
              required
            />
            <input
              autoComplete="on"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-200 mb-4 p-2 rounded-lg"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 rounded-lg"
            >
              Create account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
