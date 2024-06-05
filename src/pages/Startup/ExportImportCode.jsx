import Container from "../../components/StartupPages/Container";
import Info from "../../components/StartupPages/Info";
import RecommendedProds from "../../components/StartupPages/RecommendedProds";

// 🔴🔴 DATA FOR THE PAGE
const stats = {
  rating: 4.9,
  reviews: 343,
  purchased: 45678,
};
const definition = {
  question: "Export Import Code",
  answer:
    "The Import Export Code (IEC) in India is a unique 10-digit code issued by the Directorate General of Foreign Trade (DGFT), Ministry of Commerce and Industries, Government of India. It serves as a primary identifier for businesses and individuals involved in the import and export of goods and services.",
};

const heading =
  "The Ministry of Corporate Affairs governs the company registration process. The below registration process is basis the governing laws of MCA:";
// this heading is meant to be passed a the heading of the regustration process component

const questions = [
  {
    question: "What is an Import Export Code (IEC)?",
    answer:
      "The IEC is a unique 10-digit code issued by the Directorate General of Foreign Trade (DGFT) in India, allowing businesses and individuals to engage in the import and export of goods and services.",
  },
  {
    question: "Is the IEC mandatory for international trade?",
    answer:
      "Yes, obtaining an IEC is essential for anyone involved in importing or exporting goods and services from/to India. Without it, one cannot legally participate in international trade.",
  },
  {
    question: "How long is the IEC valid?",
    answer:
      "The IEC is valid for a lifetime, meaning once you have it, there's no need for renewal unless it's surrendered or revoked.",
  },
  {
    question: "What if my goods are for personal use and not for trade?",
    answer:
      "Goods and services imported or exported strictly for personal purposes and not associated with any commercial activity do not require an IEC.",
  },
  {
    question: "What documents are required for IEC registration?",
    answer:
      "PAN card, Address proof of the business, Cancelled Cheque, Certificate of Incorporation. ",
  },
];
const registrationItems = [{ id: 1, title: "Export Import Code", price: 2999 }];

function ExportImportCode() {
  return (
    <>
      <Info
        heading="Apply for Import Export Code (IEC) Registration"
        caption="IEC number by GDFT is a mandatory for importers and exporters in India. Apply online and get your IEC registration in less than 72 hours."
      />
      <Container
        stats={stats}
        definition={definition}
        title="Export Import Code"
        heading={heading}
        questions={questions}
        registrationItems={registrationItems}
        category="Company Formation"
      />
      <RecommendedProds />
    </>
  );
}

export default ExportImportCode;
