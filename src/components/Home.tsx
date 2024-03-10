import FirstTimeBuyerSection from "./FirstTimeBuyer";
import Hero from "./Hero";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="container mx-auto bg-slate-800 h-fit w-screen">
      <Navbar />
      <Hero />
      <FirstTimeBuyerSection />
      <footer className="bg-blue-400 h-[50px] w-full">
        <div className="flex justify-evenly items-center h-full">
          <p>* A WulfCoDev Site *</p>
          <p>* Work in Progress *</p>
          <p>
            * All data displayed on this site is from Zillow's open database *
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
