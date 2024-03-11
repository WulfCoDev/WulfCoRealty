import FirstTimeBuyerSection from "./FirstTimeBuyer";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="container mx-auto bg-slate-800 h-fit w-screen">
      <Navbar />
      <Hero />
      <FirstTimeBuyerSection />
      <Footer />
    </div>
  );
};

export default Home;
