import Container from "../../components/StartupPages/Container";
import Info from "../../components/StartupPages/Info";
import RecommendedProds from "../../components/StartupPages/RecommendedProds";

// 🔴🔴 DATA FOR THE PAGE
const stats = {
  rating: 4.6,
  reviews: 2435,
  purchased: 76894,
};
const definition = {
  question: "GST",
  answer:
    "GST stands for Goods and Services Tax. It's a tax in India that replaced several older taxes like the tax on goods (excise duty) and the tax on services. The law for this tax was made official on 29th March 2017 and started being used from 1st July 2017. Simply put, GST is a tax added when goods or services are sold. It's added at each step of making or selling something and is based on where the item is finally used or bought. This tax is the same for the whole of India.\nGST registration is a crucial step in efficiently running your business. It not only enhances your brand's credibility and authenticity but also ensures your business complies with legal requirements. If a company's annual turnover surpasses Rs. 40 lacs, it is mandated to register as a regular taxable entity under the GST regulations. ",
};

const heading =
  "The Ministry of Corporate Affairs governs the company registration process. The below registration process is basis the governing laws of MCA:";
// this heading is meant to be passed a the heading of the regustration process component

const questions = [
  {
    question: "Should I register for GST? I just started my company.",
    answer:
      "If you have zero, turnover and started recently then it is not mandtory for you. But if you are one of the following,\nCompany with Rs. 40 lacs or higher for the manufacturing sector, Company in service sector has a threshold of Rs. 20 lacs or higher then its mandatory for you to register for GST.",
  },
];
const registrationItems = [
  { id: 1, title: "GST Registration", price: 3499 },
  { id: 2, title: "Annual GST Return Filing", price: 12999 },
];

function GSTRegistration() {
  return (
    <>
      <Info
        heading="Apply for Goods and Service Tax (GST) Registration"
        caption="Get your GST registration don from anywhere, anytime."
      />
      <Container
        stats={stats}
        definition={definition}
        title="GST Registration"
        heading={heading}
        questions={questions}
        registrationItems={registrationItems}
        category="Company Formation"
      />
      <RecommendedProds />
    </>
  );
}

export default GSTRegistration;
