import Footer from "../Footer";
import Navbar from "../Navbar";

const Overview = () => {
  return (
    <div className="container mx-auto w-screen h-fit flex flex-col items-center">
      <Navbar />

      <div className="flex justify-center items-center w-full h-fit">
        <img src="public/9.jpg" alt="" />
      </div>
      <h1 className="bg-slate-400 w-full font-secondary font-medium text-white text-4xl p-4">
        Overview of the Home Buying Process
      </h1>
      <div className="w-full *:bg-white *:space-y-4">
        <div className="w-full flex flex-col justify-center *:font-secondary *:text-black *:text-xl p-4">
          <p className="font-medium bg-blue-400 p-2">Introduction</p>
          <p>
            Welcome to the exciting journey of purchasing your first home!
            Buying a home is a significant milestone in life and can be both
            exhilarating and overwhelming. Understanding the home buying process
            is crucial to making informed decisions and achieving your
            homeownership goals. In this guide, we'll break down the steps
            involved in purchasing a home and provide valuable insights to help
            you navigate each stage with confidence.
          </p>
        </div>
        <div className="w-full flex flex-col justify-center *:font-secondary *:text-black *:text-xl p-4">
          <p className="font-medium bg-blue-400 p-2">Pre-approval</p>
          <p>
            Before you start searching for your dream home, it's essential to
            get pre-approved for a mortgage. Pre-approval involves meeting with
            a lender to determine how much you can borrow based on your
            financial situation, credit history, and other factors. Having a
            pre-approval letter not only gives you a clear idea of your budget
            but also demonstrates to sellers that you're a serious buyer.
          </p>
        </div>
        <div className="w-full flex flex-col justify-center *:font-secondary *:text-black *:text-xl p-4">
          <p className="font-medium bg-blue-400 p-2">Home Search</p>
          <p>
            Once you're pre-approved, it's time to begin the exciting process of
            searching for your ideal home. There are various resources available
            to help you find properties, including online listing platforms,
            real estate agents, and attending open houses. Consider your
            priorities and preferences, such as location, size, amenities, and
            budget, when evaluating potential homes.
          </p>
        </div>
        <div className="w-full flex flex-col justify-center *:font-secondary *:text-black *:text-xl p-4">
          <p className="font-medium bg-blue-400 p-2">Making an Offer</p>
          <p>
            When you've found a home that meets your criteria, your real estate
            agent will help you craft a competitive offer to submit to the
            seller. Your offer will include the purchase price, desired closing
            date, contingencies (such as financing and home inspection), and any
            additional terms or conditions. Negotiations may occur between you
            and the seller until both parties reach an agreement.
          </p>
        </div>
        <div className="w-full flex flex-col justify-center *:font-secondary *:text-black *:text-xl p-4">
          <p className="font-medium bg-blue-400 p-2">
            Home Inspection andd Appraisal
          </p>
          <p>
            Once your offer is accepted, the next step is to conduct a home
            inspection to assess the property's condition thoroughly. A
            qualified home inspector will identify any issues or concerns, such
            as structural defects, plumbing problems, or safety hazards.
            Additionally, your lender will arrange for a home appraisal to
            determine the fair market value of the property based on its
            condition and comparable sales in the area.
          </p>
        </div>
        <div className="w-full flex flex-col justify-center *:font-secondary *:text-black *:text-xl p-4">
          <p className="font-medium bg-blue-400 p-2">Closing</p>
          <p>
            The closing process is the final step in purchasing a home and
            involves signing all necessary documents to transfer ownership from
            the seller to you. This typically includes the mortgage documents,
            title insurance, and closing disclosures. Once all paperwork is
            completed, and funds are disbursed, you'll receive the keys to your
            new home, officially becoming a homeowner!
          </p>
        </div>
        <div className="w-full flex flex-col justify-center *:font-secondary *:text-black *:text-xl p-4">
          <p className="font-medium bg-blue-400 p-2">Conclusion</p>
          <p>
            Congratulations on completing the home buying process and achieving
            your goal of homeownership! While the journey may have had its
            challenges, the rewards of owning your own home are immeasurable.
            Remember to stay informed, ask questions, and seek guidance from
            professionals along the way. Happy house hunting!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Overview;
