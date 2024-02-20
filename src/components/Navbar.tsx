import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-blue-400 w-full h-[50px]">
      <div className="w-full h-full flex justify-between items-center">
        <a href="/">
          <p className="ml-4 font-quad text-2xl">WulfCo Realty</p>
        </a>

        <div className="flex items-center mr-4 space-x-4 font-primary">
          <a href="/login" className="hover:bg-slate-500 p-3 rounded-md">
            <p>Log In</p>
          </a>

          <p>or</p>
          <a href="/signup" className="hover:bg-slate-500 p-3 rounded-md">
            <p>Sign Up</p>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
