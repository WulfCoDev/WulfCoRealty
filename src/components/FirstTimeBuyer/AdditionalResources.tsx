import Footer from "../Footer";
import Navbar from "../Navbar";

const AdditionalResources = () => {
  return (
    <div className="container mx-auto w-screen h-fit flex flex-col items-center">
      <Navbar />

      <div className="flex justify-center items-center w-full h-[600px] bg-8 bg-cover bg-no-repeat bg-bottom">
        <div>
          <h1 className="w-full font-secondary font-medium text-white text-4xl p-4 backdrop-blur-sm bg-black/10">
            Additional Resources
          </h1>
        </div>
      </div>
      <div className="w-full *:bg-white *:space-y-4">
        <div className="w-full flex flex-col justify-center *:font-secondary *:text-black *:text-xl p-4">
          <p className="font-medium bg-blue-400 p-2">
            Reputable Websites and Blogs
          </p>
          <ul className="space-y-4 list-disc list-inside">
            <li>
              <a
                href="https://www.zillow.com/"
                target="_blank"
                className="font-medium cursor-pointer text-blue-500"
              >
                Zillow:{" "}
              </a>
              A comprehensive real estate marketplace providing listings, home
              value estimates, and educational resources
            </li>
            <li>
              <a
                href="https://www.realtor.com/"
                target="_blank"
                className="font-medium text-blue-500"
              >
                Realtor.com:{" "}
              </a>
              Offers property listings, neighborhood information, and expert
              advice for home buyers
            </li>
            <li>
              <a
                href="https://www.trulia.com/"
                target="_blank"
                className="font-medium text-blue-500"
              >
                Trulia:{" "}
              </a>
              Provides insights into local real estate markets, crime rates,
              school ratings, and more
            </li>
            <li>
              <a
                href="https://www.homeadvisor.com/"
                target="_blank"
                className="font-medium text-blue-500"
              >
                HomeAdvisor:{" "}
              </a>
              Connects homeowners with trusted home service professionals for
              repairs, renovations, and maintenance
            </li>
          </ul>
        </div>
        <div className="w-full flex flex-col justify-center *:font-secondary *:text-black *:text-xl p-4">
          <p className="font-medium bg-blue-400 p-2">
            Books for First-Time Home Buyers
          </p>
          <ul className="space-y-4 list-disc list-inside">
            <li>
              <span className="italic font-medium ">
                The First-Time Homeowner's Survival Guide{" "}
              </span>
              by Sid Davis - Offers practical advice on every aspect of home
              buying, from financing to maintenance
            </li>
            <li>
              <span className="italic font-medium ">
                Nolo's Essential Guide to Buying Your First Home{" "}
              </span>
              by Ilona Bray J.D. - A comprehensive guide covering legal and
              financial aspects of the home buying process
            </li>
            <li>
              <span className="italic font-medium ">
                100 Questions Every First-Time Home Buyer Should Ask{" "}
              </span>
              by Ilyce R. Glink - Addresses common concerns and misconceptions
              about buying a home
            </li>
          </ul>
        </div>
        <div className="w-full flex flex-col justify-center *:font-secondary *:text-black *:text-xl p-4">
          <p className="font-medium bg-blue-400 p-2">
            Podcasts for Home Buyers
          </p>
          <ul className="space-y-4 list-disc list-inside">
            <li>
              <span className="italic font-medium">The Dave Ramsey Show </span>-
              Provides financial advice, including tips for saving for a down
              payment and navigating the mortgage process
            </li>
            <li>
              <span className="italic font-medium">
                The Millennial Homeowner{" "}
              </span>
              - Offers insights and advice specifically tailored to first-time
              home buyers in the millennial generation
            </li>
            <li>
              <span className="italic font-medium">
                The First Time Home Buyer Podcast{" "}
              </span>
              - Features interviews with industry experts and practical tips for
              navigating the home buying process
            </li>
          </ul>
        </div>
        <div className="w-full flex flex-col justify-center *:font-secondary *:text-black *:text-xl p-4">
          <p className="font-medium bg-blue-400 p-2">
            Government and Non-Profit Resources
          </p>
          <ul className="space-y-4 list-disc list-inside">
            <li>
              <a
                href="https://www.hud.gov/"
                target="_blank"
                className="font-medium cursor-pointer text-blue-500"
              >
                U.S. Department of Housing and Urban Development (HUD){" "}
              </a>
              - Offers resources for home buyers, including homeownership
              counseling, down payment assistance programs, and FHA loans
            </li>
            <li>
              <a
                href="https://www.neighborworks.org/home"
                target="_blank"
                className="font-medium text-blue-500"
              >
                NeighborWorks America{" "}
              </a>
              - Provides education and support for first-time home buyers
              through local community-based organizations
            </li>
            <li>
              <a
                href="https://www.consumerfinance.gov/"
                target="_blank"
                className="font-medium text-blue-500"
              >
                Consumer Financial Protection Bureau (CFPB){" "}
              </a>
              - Offers tools and resources to help consumers make informed
              decisions about mortgages and other financial products
            </li>
          </ul>
        </div>
        <div className="w-full flex flex-col justify-center *:font-secondary *:text-black *:text-xl p-4">
          <p className="font-medium bg-blue-400 p-2">
            Online Communities and Forums
          </p>
          <ul className="space-y-4 list-disc list-inside">
            <li>
              <a
                href="https://www.reddit.com/r/FirstTimeHomeBuyer/"
                target="_blank"
                className="font-medium cursor-pointer text-blue-500"
              >
                Reddit - r/FirstTimeHomeBuyer{" "}
              </a>
              - A community for first time home buyers
            </li>
            <li>
              <a
                href="https://www.reddit.com/r/RealEstate/"
                target="_blank"
                className="font-medium cursor-pointer text-blue-500"
              >
                Reddit - r/RealEstate{" "}
              </a>
              - A community for discussing real estate trends, market
              conditions, and home buying advice
            </li>
            <li>
              <a
                href="https://www.city-data.com/forum/"
                target="_blank"
                className="font-medium text-blue-500"
              >
                City-Data Forum{" "}
              </a>
              - Provides forums for discussing specific cities, neighborhoods,
              and real estate topics with local residents and experts
            </li>
          </ul>
        </div>
        <div className="w-full flex flex-col justify-center *:font-secondary *:text-black *:text-xl p-4">
          <p className="font-medium bg-blue-400 p-2">
            Financial Tools and Calculators
          </p>

          <ul className="space-y-4 list-disc list-inside">
            <li>
              <a
                href="https://www.mortgagecalculator.org/"
                target="_blank"
                className="font-medium cursor-pointer text-blue-500"
              >
                Mortgage Calculator{" "}
              </a>
              - Helps buyers estimate monthly mortgage payments based on loan
              amount, interest rate, and term
            </li>
            <li>
              <a
                href="https://www.thebalancemoney.com/budgeting-calculator-5120904"
                target="_blank"
                className="font-medium cursor-pointer text-blue-500"
              >
                Budget Planner{" "}
              </a>
              - Assists buyers in creating a budget that accounts for housing
              expenses, debt payments, and savings goals
            </li>
          </ul>
        </div>
        <div className="w-full flex flex-col justify-center *:font-secondary *:text-black *:text-xl p-4">
          <p className="font-medium bg-blue-400 p-2">
            Home Buying Guides and Checklists
          </p>

          <ul className="space-y-4 list-disc list-inside">
            <li>
              <a
                href="https://www.zillow.com/learn/category/buying/"
                target="_blank"
                className="font-medium cursor-pointer text-blue-500"
              >
                Home Buying Guide from Zillow{" "}
              </a>
              - Offers a series of articles about the home buying process,
              including tips for finding the right property and negotiating the
              best deal
            </li>
            <li>
              <a
                href="https://themortgagereports.com/26853/want-to-buy-a-house-checklist"
                target="_blank"
                className="font-medium cursor-pointer text-blue-500"
              >
                First Time Home Buyer Checklist{" "}
              </a>
              - Provides a checklist of tasks and considerations for first-time
              buyers, from saving for a down payment to closing the deal
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdditionalResources;
