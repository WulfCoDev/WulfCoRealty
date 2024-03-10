const FirstTimeBuyerSection = () => {
  return (
    <div className="w-full h-fit flex items-center flex-col">
      <h1 className="text-white font-tertiary font-semibold text-4xl bg-slate-400 p-2 w-full">
        First time buyer?
      </h1>
      <div className="w-full flex space-x-8 justify-evenly items-center p-8">
        <div className="bg-blue-400 w-[250px] h-[250px] flex justify-center items-center flex-col">
          <p className="font-secondary text-white text-2xl text-center">
            Overview <br /> of the <br /> Home Buying Process
          </p>
        </div>
        <div className="bg-blue-400 w-[250px] h-[250px] flex justify-center items-center flex-col">
          <p className="font-secondary text-white text-2xl text-center">
            Financial Preparation
          </p>
        </div>
        <div className="bg-blue-400 w-[250px] h-[250px] flex justify-center items-center flex-col">
          <p className="font-secondary text-white text-2xl text-center">
            Finding <br /> the <br /> Right Home
          </p>
        </div>
        <div className="bg-blue-400 w-[250px] h-[250px] flex justify-center items-center flex-col">
          <p className="font-secondary text-white text-2xl text-center">
            Understanding <br /> the <br /> Market
          </p>
        </div>
      </div>
      <div className="w-full flex space-x-8 justify-evenly items-center p-8">
        <div className="bg-blue-400 w-[250px] h-[250px] flex justify-center items-center flex-col">
          {" "}
          <p className="font-secondary text-white text-2xl text-center">
            Home Inspection <br /> and <br /> Appraisal
          </p>
        </div>
        <div className="bg-blue-400 w-[250px] h-[250px] flex justify-center items-center flex-col">
          <p className="font-secondary text-white text-2xl text-center">
            Closing Process
          </p>
        </div>
        <div className="bg-blue-400 w-[250px] h-[250px] flex justify-center items-center flex-col">
          <p className="font-secondary text-white text-2xl text-center">
            Post-Purchase Consideration
          </p>
        </div>
        <div className="bg-blue-400 w-[250px] h-[250px] flex justify-center items-center flex-col">
          <p className="font-secondary text-white text-2xl text-center">
            Additional Resources
          </p>
        </div>
      </div>
    </div>
  );
};

export default FirstTimeBuyerSection;
