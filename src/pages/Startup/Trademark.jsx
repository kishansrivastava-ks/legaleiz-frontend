import Container from "../../components/StartupPages/Container";
import Info from "../../components/StartupPages/Info";
import RecommendedProds from "../../components/StartupPages/RecommendedProds";

// 🔴🔴 DATA FOR THE PAGE
const stats = {
  rating: 4.5,
  reviews: 1654,
  purchased: 2970,
};
const definition = {
  question: "Trademark",
  answer:
    "Trademark is also popularly known as brand name in layman’s language. Trademark is a visual symbol which may be a word signature, name, device, label, numerals or combination of colours creating an identity of a product or a business. The necessary legal requirement to register a trademark under the Act is that the selected image should be capable of being represented graphically on a paper. Also, it should be unique and not similar to any other mark which is already registered under the Trademark Registration Act",
};

const heading =
  "The Ministry of Corporate Affairs governs the company registration process. The below registration process is basis the governing laws of MCA:";
// this heading is meant to be passed a the heading of the regustration process component

const questions = [
  {
    question: "What is a Trademark Class?",
    answer:
      "Trademark Registry has classified goods and services under 45 classes. Your application must mention the trademark class/classes the goods/services itrepresent. The trademark would be registered under those classes only in which it is applied.For each class, a separate application is filed by paying prescribed Government fee.",
  },
  {
    question: "What is the validity of Trademark?",
    answer:
      "The Trademark Registration is valid for 10 years from the date of application and may then be renewed for a period of 10 years within 6 months of the due date after expiry of the 10 years.",
  },
  {
    question: "How long does it take to register a Trademark?",
    answer:
      "Usually, it takes at least 15 to 18 months for Trademark registration in India once applied. Post which the owner can use (R) symbol beside the Trademark. However, as soon as the online Trademark application is filed, the applicant can start using the (TM) symbol. The registration may get delayed due to the verification procedure.",
  },
  {
    question: "Is the Trademark registered in India valid outside India?",
    answer:
      "The registration application filed under the Trademark Act, 1999 is verified and registered in India only and it remains valid only in India.",
  },
  {
    question: "What is the Govt. fee for a Single Class Trademark application?",
    answer:
      "For Trademark registration, the fees are levied based on ‘Number of Classes Applied’ and not on the ‘Number of Applications’.  If your startup is registered under MSME, the government fee of Rs. 4,500 is to be paid for application for each class. For all other cases, the Government fee of Rs. 9000 per class is to be paid.",
  },
];
const registrationItems = [
  { id: 1, title: "Trademark", price: 10500 },
  { id: 4, title: "MSME Registration", price: 1999 },
];

function Trademark() {
  return (
    <>
      <Info
        heading="Your Brand is your Business Identity!"
        caption="Protect your identity Get your TRADEMARK registered"
      />
      <Container
        stats={stats}
        definition={definition}
        title="Trademark"
        heading={heading}
        questions={questions}
        registrationItems={registrationItems}
        category="Intellectual Property"
        serviceId="66824a7ac9ff3066319c7c7e"
      />
      <RecommendedProds />
    </>
  );
}

export default Trademark;
