import Footer from "../Footer";
import Navbar from "../Navbar";

const PostPurchaseConsideration = () => {
  return (
    <div className="container mx-auto w-screen h-fit flex flex-col items-center">
      <Navbar />

      <div className="flex justify-center items-center w-full h-[600px] bg-7 bg-cover bg-no-repeat bg-center">
        <div>
          <h1 className="w-full font-secondary font-medium text-white text-4xl p-4 backdrop-blur-sm bg-black/10">
            Post-Purchase Considerations
          </h1>
        </div>
      </div>
      <div className="w-full *:bg-white *:space-y-4">
        <div className="w-full flex flex-col justify-center *:font-secondary *:text-black *:text-xl p-4">
          <p>
            Congratulations on becoming a homeowner! Now that you've found your
            dream home and completed the closing process, it's time to embark on
            your journey as a homeowner. Here are some important post-purchase
            considerations to help you navigate this exciting phase of
            homeownership:
          </p>
        </div>
        <div className="w-full flex flex-col justify-center *:font-secondary *:text-black *:text-xl p-4">
          <p className="font-medium bg-blue-400 p-2">
            Home Maintenance Responsibilities
          </p>
          <p>
            Owning a home comes with ongoing maintenance responsibilities to
            keep your property in top condition. Here are some essential
            maintenance tasks to consider:
          </p>
          <ul className="space-y-4 list-disc list-inside">
            <li>Regularly inspect and clean gutters to prevent water damage</li>
            <li>
              Change HVAC filters every few months for optimal air quality and
              efficiency
            </li>
            <li>
              Test smoke detectors and carbon monoxide detectors regularly and
              replace batteries as needed
            </li>
            <li>
              Schedule seasonal maintenance for your heating and cooling systems
            </li>
            <li>
              Keep an eye on the condition of your roof and address any issues
              promptly
            </li>
          </ul>
        </div>
        <div className="w-full flex flex-col justify-center *:font-secondary *:text-black *:text-xl p-4">
          <p className="font-medium bg-blue-400 p-2">Repairs and Renovations</p>
          <p>
            As you settle into your new home, you may want to make updates or
            renovations to personalize the space. Consider the following:
          </p>

          <ul className="space-y-4 list-disc list-inside">
            <li>
              Prioritize repairs and renovations based on your budget and the
              needs of your home
            </li>
            <li>
              Obtain quotes from reputable contractors for larger projects and
              ensure all work is permitted and up to code
            </li>
            <li>
              Research DIY projects for smaller updates and improvements that
              you can tackle yourself
            </li>
            <li>
              Set aside a contingency fund for unexpected repairs or emergencies
            </li>
          </ul>
        </div>
        <div className="w-full flex flex-col justify-center *:font-secondary *:text-black *:text-xl p-4">
          <p className="font-medium bg-blue-400 p-2">Homeowners Insurance</p>
          <p>
            Protecting your investment with homeowners insurance is essential.
            Here's what you need to know:
          </p>

          <ul className="space-y-4 list-disc list-inside">
            <li>
              Review your homeowners insurance policy to understand your
              coverage limits and exclusions
            </li>
            <li>
              Consider additional coverage options, such as flood insurance or
              earthquake insurance, depending on your location
            </li>
            <li>
              Update your policy as needed to reflect any changes to your home
              or belongings
            </li>
            <li>
              Keep important documents, such as your insurance policy and
              contact information for your insurance provider, in a safe and
              easily accessible location
            </li>
          </ul>
        </div>

        <div className="w-full flex flex-col justify-center *:font-secondary *:text-black *:text-xl p-4">
          <p className="font-medium bg-blue-400 p-2">Emergency Preparedness</p>
          <p>
            Being prepared for emergencies can give you peace of mind and
            protect your home and family. Take these steps to ensure you're
            ready for the unexpected:
          </p>
          <ul className="space-y-4 list-disc list-inside">
            <li>
              Create a home emergency kit with essential supplies, including
              water, non-perishable food, first aid supplies, and flashlights
            </li>
            <li>
              Develop an emergency evacuation plan and practice it with your
              family regularly
            </li>
            <li>
              Install smoke detectors and carbon monoxide detectors on every
              level of your home and test them regularly
            </li>
            <li>
              Keep important documents, such as insurance policies, birth
              certificates, and passports, in a waterproof and fireproof safe
            </li>
          </ul>
        </div>
        <div className="w-full flex flex-col justify-center *:font-secondary *:text-black *:text-xl p-4">
          <p className="font-medium bg-blue-400 p-2">Community Engagement</p>
          <p>
            Getting involved in your community can enhance your overall
            homeownership experience. Consider the following:
          </p>
          <ul className="space-y-4 list-disc list-inside">
            <li>
              Join neighborhood associations or homeowner associations to
              connect with your neighbors and stay informed about local events
              and initiatives
            </li>
            <li>
              Participate in community clean-up events, neighborhood watch
              programs, or volunteer opportunities to contribute to the
              well-being of your community
            </li>
            <li>
              Attend local meetings or town hall events to stay informed about
              developments that may impact your neighborhood
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostPurchaseConsideration;
