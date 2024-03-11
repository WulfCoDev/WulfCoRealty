import Footer from "../Footer";
import Navbar from "../Navbar";

const FindRightHome = () => {
  return (
    <div className="container mx-auto w-screen h-fit flex flex-col items-center">
      <Navbar />

      <div className="flex justify-center items-center w-full h-fit">
        <img src="src/assets/3.jpg" alt="" />
      </div>
      <h1 className="bg-slate-400 w-full font-secondary font-medium text-white text-4xl p-4">
        Finding the Right Home
      </h1>
      <div className="w-full *:bg-white *:space-y-4">
        <div className="w-full flex flex-col justify-center *:font-secondary *:text-black *:text-xl p-4">
          <p className="font-medium bg-blue-400 p-2">
            Identify Your Priorities
          </p>
          <p>
            Before you start your home search, it's essential to identify your
            priorities and preferences. Consider the following questions:
          </p>
          <ul className="list-disc list-inside space-y-4">
            <li>
              What type of home are you looking for? (e.g., single-family,
              condo, townhouse)
            </li>
            <li>How many bedrooms and bathrooms do you need?</li>
            <li>
              What is your preferred location? Consider factors such as
              proximity to work, schools, amenities, and public transportation
            </li>
            <li>
              What amenities are important to you? (e.g., backyard, garage,
              updated kitchen)
            </li>
            <li>
              Are you willing to renovate, or do you prefer a move-in ready
              home?
            </li>
          </ul>
        </div>
        <div className="w-full flex flex-col justify-center *:font-secondary *:text-black *:text-xl p-4">
          <p className="font-medium bg-blue-400 p-2">Start Your Search</p>
          <p>
            Once you have a clear idea of your priorities, it's time to start
            your home search. Here are some strategies to consider:
          </p>
          <ul className="space-y-4 list-disc list-inside">
            <li>
              <span className="font-medium">Online resources: </span>
              Use real estate websites and mobile apps to search for properties
              based on your criteria. Filter results by location, price range,
              and features to narrow down your options
            </li>
            <li>
              <span className="font-medium">Real estate agents: </span>
              Consider working with a licensed real estate agent who can provide
              personalized assistance and access to exclusive listings. An
              experienced agent can help you navigate the market, negotiate
              offers, and handle paperwork
            </li>
            <li>
              <span className="font-medium">Open houses: </span>
              Attend open houses in your desired neighborhoods to get a feel for
              different properties and neighborhoods. Take notes, ask questions,
              and gather information to help you make informed decisions
            </li>
          </ul>
        </div>
        <div className="w-full flex flex-col justify-center *:font-secondary *:text-black *:text-xl p-4">
          <p className="font-medium bg-blue-400 p-2">Evaluate Properties</p>
          <p>
            As you search for homes, it's essential to evaluate each property
            carefully. Here are some factors to consider:
          </p>
          <ul className="space-y-4 list-disc list-inside">
            <li>
              <span className="font-medium">Location: </span>
              Assess the neighborhood, including nearby amenities, schools,
              parks, and transportation options. Consider factors such as
              safety, walkability, and future development plans
            </li>
            <li>
              <span className="font-medium">Condition: </span>
              Pay attention to the condition of the property, including its age,
              maintenance level, and potential repair or renovation needs. Look
              for signs of water damage, structural issues, and pest
              infestations
            </li>
            <li>
              <span className="font-medium">Features: </span>
              Evaluate the features and amenities of each home, such as the
              layout, size, floor plan, and architectural style. Determine if
              the property meets your functional and aesthetic preferences
            </li>
            <li>
              <span className="font-medium">Resale potential: </span>
              Consider the long-term value and resale potential of the property.
              Look for desirable features that appeal to a wide range of buyers
              and could contribute to future appreciation
            </li>
          </ul>
        </div>
        <div className="w-full flex flex-col justify-center *:font-secondary *:text-black *:text-xl p-4">
          <p className="font-medium bg-blue-400 p-2">Perform Due Diligence</p>
          <p>
            Before making an offer on a home, it's crucial to perform due
            diligence to ensure you're making a sound investment. Here's what to
            do:
          </p>
          <ul className="space-y-4 list-disc list-inside">
            <li>
              <span className="font-medium">Research: </span>
              Gather information about the property's history, including past
              sales, ownership, and any disclosed issues or repairs. Review
              property records, tax assessments, and zoning regulations
            </li>
            <li>
              <span className="font-medium">Inspections: </span>
              Hire a qualified home inspector to conduct a thorough inspection
              of the property. The inspector will assess the condition of the
              home's systems, structure, and major components, such as the roof,
              HVAC, plumbing, and electrical systems
            </li>
            <li>
              <span className="font-medium">Ask questions: </span>
              Don't hesitate to ask questions and seek clarification on any
              aspects of the property or transaction that you're unsure about.
              Your real estate agent and inspector can provide guidance and
              assistance throughout the process
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FindRightHome;
