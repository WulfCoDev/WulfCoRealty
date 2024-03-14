const FirstTimeBuyerSection = () => {
  return (
    <div className="w-full h-fit flex items-center flex-col">
      <h1 className="text-white font-secondary font-bold text-4xl bg-slate-400 p-2 w-full shadow-lg shadow-black">
        First Time Buyers
      </h1>
      <div className="w-full flex sm:flex-col space-x-8 justify-evenly items-center p-8 *:rounded-md *:shadow-lg *:shadow-black">
        <div className="bg-1 bg-cover bg-no-repeat w-[250px] h-[250px] flex justify-center items-center flex-col">
          <a href="/overview">
            <p className="font-secondary text-white backdrop-blur-sm bg-black/10 font-semibold text-2xl text-center ml-4 mr-4 p-2">
              Overview <br /> of the <br /> Home Buying Process
            </p>
          </a>
        </div>
        <div className="bg-2 bg-cover bg-no-repeat w-[250px] h-[250px] flex justify-center items-center">
          <a href="/financial-preparation">
            <p className="font-secondary text-white backdrop-blur-sm bg-black/10 font-semibold text-2xl text-center ml-4 mr-4 p-2">
              Financial Preparation
            </p>
          </a>
        </div>
        <div className="bg-3 bg-cover bg-no-repeat w-[250px] h-[250px] flex justify-center items-center flex-col">
          <a href="/finding-the-right-home">
            <p className="p-2 font-secondary text-white backdrop-blur-sm bg-black/10 font-semibold text-2xl text-center ml-4 mr-4">
              Finding <br /> the <br /> Right Home
            </p>
          </a>
        </div>
        <div className="bg-4 bg-cover bg-no-repeat w-[250px] h-[250px] flex justify-center items-center flex-col">
          <a href="understanding-the-market">
            <p className="p-2 font-secondary text-white backdrop-blur-sm bg-black/10 font-semibold text-2xl text-center ml-4 mr-4">
              Understanding <br /> the <br /> Market
            </p>
          </a>
        </div>
      </div>
      <div className="w-full flex sm:flex-col space-x-8 justify-evenly items-center p-8 *:rounded-md *:shadow-lg *:shadow-black">
        <div className="bg-5 bg-cover bg-no-repeat w-[250px] h-[250px] flex justify-center items-center flex-col">
          {" "}
          <a href="/home-inspections-and-appraisals">
            <p className="font-secondary text-white backdrop-blur-sm bg-black/10 font-semibold text-2xl text-center ml-4 mr-4 p-2">
              Home Inspection <br /> and <br /> Appraisal
            </p>
          </a>
        </div>
        <div className="bg-6 bg-cover bg-no-repeat w-[250px] h-[250px] flex justify-center items-center flex-col">
          <a href="/closing-process">
            <p className="font-secondary text-white backdrop-blur-sm bg-black/10 font-semibold text-2xl text-center ml-4 mr-4 p-2">
              Closing Process
            </p>
          </a>
        </div>
        <div className="bg-7 bg-cover bg-no-repeat w-[250px] h-[250px] flex justify-center items-center flex-col">
          <a href="/post-purchase-considerations">
            <p className="font-secondary text-white backdrop-blur-sm bg-black/10 font-semibold text-2xl text-center ml-4 mr-4 p-2">
              Post Purchase Considerations
            </p>
          </a>
        </div>
        <div className="bg-8 bg-cover bg-no-repeat w-[250px] h-[250px] flex justify-center items-center flex-col">
          <a href="/additional-resources">
            <p className="font-secondary text-white backdrop-blur-sm bg-black/10 font-semibold text-2xl text-center ml-4 mr-4 p-2">
              Additional Resources
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FirstTimeBuyerSection;
