import Footer from "../Footer";
import Navbar from "../Navbar";

const ClosingProcess = () => {
  return (
    <div className="container mx-auto w-screen h-fit flex flex-col items-center">
      <Navbar />

      <div className="flex justify-center items-center w-full h-[600px] bg-6 bg-cover bg-no-repeat bg-bottom">
        <div>
          <h1 className="w-full font-secondary font-medium text-white text-4xl p-4 backdrop-blur-sm bg-black/10">
            Closing Process: What to Expect When Closing on Your First Home
          </h1>
        </div>
      </div>
      <div className="w-full *:bg-white *:space-y-4">
        <div className="w-full flex flex-col justify-center *:font-secondary *:text-black *:text-xl p-4">
          <p>
            Congratulations! You've found your dream home, negotiated the terms,
            and now it's time to close the deal. The closing process is the
            final step in purchasing a home, where all parties involved come
            together to complete the transaction. Here's what you can expect
            during the closing process:
          </p>
        </div>
        <div className="w-full flex flex-col justify-center *:font-secondary *:text-black *:text-xl p-4">
          <p className="font-medium bg-blue-400 p-2">Reviewing Documents</p>
          <p>
            Before the closing date, you'll receive a stack of documents to
            review and sign. These documents include:
          </p>
          <ul className="space-y-4 list-disc list-inside">
            <li>
              <span className="font-medium">Purchase agreement: </span>
              This outlines the terms and conditions of the sale, including the
              purchase price, closing date, and any contingencies
            </li>
            <li>
              <span className="font-medium">Loan Documents: </span>
              If you're financing the purchase with a mortgage, you'll receive
              loan documents from your lender outlining the terms of the loan,
              including the interest rate, monthly payments, and closing costs
            </li>
            <li>
              <span className="font-medium">Closing disclosure: </span>
              This document provides a breakdown of the closing costs, including
              lender fees, appraisal fees, title insurance, and escrow expenses.
              Review it carefully to ensure accuracy and compare it with the
              Loan Estimate you received earlier in the process
            </li>
          </ul>
        </div>
        <div className="w-full flex flex-col justify-center *:font-secondary *:text-black *:text-xl p-4">
          <p className="font-medium bg-blue-400 p-2">
            Conducting a Final Walk-Through
          </p>
          <p>
            Before closing, you'll have the opportunity to conduct a final
            walk-through of the property to ensure it's in the same condition as
            when you agreed to purchase it. Pay close attention to any repairs
            or agreed-upon improvements to confirm they've been completed
            satisfactorily.
          </p>
        </div>
        <div className="w-full flex flex-col justify-center *:font-secondary *:text-black *:text-xl p-4">
          <p className="font-medium bg-blue-400 p-2">
            Bringing Funds to Closing
          </p>
          <p>
            On the day of closing, you'll need to bring certified funds or
            arrange a wire transfer to cover your closing costs and any down
            payment required. Your lender will provide a breakdown of the amount
            due, including the total cash required to close.
          </p>
        </div>
        <div className="w-full flex flex-col justify-center *:font-secondary *:text-black *:text-xl p-4">
          <p className="font-medium bg-blue-400 p-2">Signing Documents</p>
          <p>
            During the closing appointment, you'll meet with various parties
            involved in the transaction, including the seller, real estate
            agents, title company representatives, and possibly a closing
            attorney. You'll sign the necessary documents, including the deed,
            mortgage note, and other legal disclosures.
          </p>
        </div>
        <div className="w-full flex flex-col justify-center *:font-secondary *:text-black *:text-xl p-4">
          <p className="font-medium bg-blue-400 p-2">Receiving the Keys</p>
          <p>
            Once all documents have been signed and funds have been transferred,
            ownership of the property officially transfers to you.
            Congratulations! You'll receive the keys to your new home and can
            begin moving in and making it your own.
          </p>
        </div>
        <div className="w-full flex flex-col justify-center *:font-secondary *:text-black *:text-xl p-4">
          <p className="font-medium bg-blue-400 p-2">
            Tips for a Smooth Closing Experience
          </p>

          <ul className="space-y-4 list-disc list-inside">
            <li>
              <span className="font-medium">Prepare in advance: </span>
              Review all documents and ask questions before the closing
              appointment to ensure you understand everything
            </li>
            <li>
              <span className="font-medium">Bring identification: </span>
              Bring a valid photo ID and any additional documentation required
              by your lender or closing agent
            </li>
            <li>
              <span className="font-medium">Be flexible: </span>
              Closings can sometimes experience delays due to unforeseen
              circumstances. Be patient and flexible with scheduling
            </li>
            <li>
              <span className="font-medium">Celebrate: </span>
              Closing on your first home is a significant milestone. Take a
              moment to celebrate your accomplishment and look forward to making
              lasting memories in your new home
            </li>
          </ul>
          <p>
            By understanding the closing process and being prepared, you can
            navigate this final step with confidence and excitement as you
            embark on your journey as a homeowner.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ClosingProcess;
