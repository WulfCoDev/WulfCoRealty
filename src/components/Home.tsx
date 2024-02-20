import Hero from "./Hero";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="container mx-auto bg-slate-800 h-screen w-screen">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
