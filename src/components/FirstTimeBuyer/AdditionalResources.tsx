import Footer from "../Footer";
import Navbar from "../Navbar";

const AdditionalResources = () => {
  return (
    <div className="container mx-auto w-screen h-fit flex flex-col items-center">
      <Navbar />

      <div className="flex justify-center items-center w-full h-[600px] bg-7 bg-cover bg-no-repeat bg-center">
        <div>
          <h1 className="w-full font-secondary font-medium text-white text-4xl p-4 backdrop-blur-sm bg-black/10">
            Additional Resources
          </h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdditionalResources;
