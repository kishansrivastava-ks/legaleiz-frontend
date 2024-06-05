import Container from "../../components/StartupPages/Container";
import Info from "../../components/StartupPages/Info";
import RecommendedProds from "../../components/StartupPages/RecommendedProds";

// 🔴🔴 DATA FOR THE PAGE
const stats = {
  rating: 4.6,
  reviews: 1243,
  purchased: 19756,
};
const definition = {
  question: "Limited Liability Partnership",
  answer:
    "Limited Liability Partnership(LLP) was introduced in 2008, since then it has quickly become a popular legal structure for business. Limited Liability Partnership Registration is governed by the Limited Liability Partnership Act, 2008. LLP was introduced to provide a form of business that is easy to maintain and to help owners by providing them with limited liability. \nLLP requires fewer compliances and therefore it is preferred by Professionals, Micro and Small businesses that are family owned or closely-held, trading, service sector especially advisory and professional service firms.",
};
const benefits = [
  {
    id: 1,
    point: "Limited Liability of Partners",
  },
  {
    id: 2,
    point: "Separate Legal Entity",
  },
  {
    id: 3,
    point: "Continuity of Existence",
  },
  {
    id: 4,
    point: "Minimal Regulatory Compliance",
  },
  {
    id: 5,
    point: "Transferability of Ownership",
  },
];
const requirements = [
  {
    id: 1,
    point: "Minimum of two persons as Partners & Designated Partners",
  },
  {
    id: 2,
    point: "No minimum Capital is required for LLP Registration",
  },
  {
    id: 3,
    point: "At least one Designated Partner should be resident in India.",
  },
  {
    id: 4,
    point:
      "Partners are not restricted by citizenship but should be aged above 18 years of age",
  },
  {
    id: 5,
    point: "At least one Designated Partner should be a resident of India",
  },
  {
    id: 6,
    point:
      "Foreign residents are also allowed as Designated Partners after obtaining Designated Partner Identification Number",
  },
];
const steps = [
  { no: 1, step: "Application for DSC &DIN for Partners" },
  {
    no: 2,
    step: "Application filing for Nameavailability",
  },
  {
    no: 3,
    step: "Drafting and Filing of LLP agreement",
  },
  {
    no: 4,
    step: "Drafting and Filing of eMoa and eAoA",
  },
  {
    no: 5,
    step: "Apply for PAN and TAN of the company",
  },
  {
    no: 6,
    step: "Certificate of Incorporation issued by RoCalong with PAN and TAN",
  },
  {
    no: 7,
    step: "Open a Current Bank account on the company name",
  },
];
const heading =
  "The Ministry of Corporate Affairs governs the company registration process. The below registration process is basis the governing laws of MCA:";
// this heading is meant to be passed a the heading of the regustration process component

const questions = [
  {
    question: "Do I need to be physically present during this process?",
    answer:
      "No, new company registration is a fully online process. As all documents are filed electronically, you would not need to be physically present at all. You would need to send us scanned copies of all the required documents & forms.",
  },
  {
    question: "Who can become a Partner/Designated Partner in a LLP?",
    answer:
      "Any individual, or even a company or an LLP, can become a partner. However, only an individual can become a ‘designated partner’ in an LLP.",
  },
  {
    question: "What is a DPIN?",
    answer:
      "A DPIN or the Designated Partner Identification Number is a unique number that identifies the partner of an LLP. When any person is appointed as an LLP partner, the DPIN must be mentioned in the relevant documentation.",
  },
  {
    question: "What is anLLP Agreement?",
    answer:
      "An LLP agreement is one that is made between the partners and the LLP regarding the relationship between the individual partners in the LLP. An LLP agreement usually consists of management policies, inclusion of new partners, policy making strategies, and so on.",
  },
  {
    question: "Can one register aLLP company on their home address?",
    answer:
      "Yes, one can register aLLP company on their home addressin India.You will require to submit a copy of the utility bill the same address alongwithwith the NOC from the landlord for LLP Company Registration.",
  },
];
const registrationItems = [
  { id: 1, title: "Limited Liability Partnership", price: 12999 },
  { id: 2, title: "GST Registration", price: 3499 },
  { id: 3, title: "Startup India Registration", price: 3999 },
  { id: 4, title: "MSME Registration", price: 1999 },
];

function OnePersonCompany() {
  return (
    <>
      <Info
        heading="Do you want to start a business with somebody whom you trust ?"
        caption="Form a LIMITED LIABILITY PARTNERSHIP COMPANY and get started."
      />
      <Container
        steps={steps}
        stats={stats}
        definition={definition}
        title="Limited Liability Partnership"
        benefits={benefits}
        heading={heading}
        questions={questions}
        requirements={requirements}
        registrationItems={registrationItems}
        category="Company Formation"
      />
      <RecommendedProds />
    </>
  );
}

export default OnePersonCompany;
