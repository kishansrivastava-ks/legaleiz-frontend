import Container from "../../components/StartupPages/Container";
import Info from "../../components/StartupPages/Info";
import RecommendedProds from "../../components/StartupPages/RecommendedProds";

// 🔴🔴 DATA FOR THE PAGE
const stats = {
  rating: 4.8,
  reviews: 56,
  purchased: 79,
};
const definition = {
  question: "Patent",
  answer:
    "As per the Patent Act, for an invention to be patentable, the invention must be a new product or process, involving an inventive step and capable of being made or used in industry. Patent registration can be obtained in India for an invention. Patent registrations are not applicable for all inventions, and the invention must satisfy certain criteria to be patentable in India.\nPatent filing or patent registration is the first step an inventor takes to protect his/her invention from being misused. Patent filing in India is a complicated process, however, with the right legal guidance, it can be done easily.",
};
const benefits = [
  {
    id: 1,
    point: "Exclusive authority over your invention",
  },
  {
    id: 2,
    point:
      "Exclusive patent right grants the owner of the patent controlling use of the invention for twenty years",
  },
  {
    id: 3,
    point: "Commercial use of patents can earn monetary returns",
  },
  {
    id: 4,
    point: "Patented product is likely to improve brand perception",
  },
  {
    id: 5,
    point:
      "Owner/Inventor can sell or transfer the intellectual property rights of the work to the other person",
  },
];

const steps = [
  { no: 1, step: "Patent Search" },
  {
    no: 2,
    step: "File patent application",
  },
  {
    no: 3,
    step: "Preparation of a patentability report",
  },
  {
    no: 4,
    step: "Publication of patent application",
  },
  {
    no: 5,
    step: "Patent Examination",
  },
  {
    no: 6,
    step: "Patent Objections",
  },
  {
    no: 7,
    step: "Grant of Patent",
  },
];
const heading =
  "The Ministry of Corporate Affairs governs the company registration process. The below registration process is basis the governing laws of MCA:";
// this heading is meant to be passed a the heading of the regustration process component

const questions = [
  {
    question: "Why should one patent his invention?",
    answer:
      "Patent filing is important to possess exclusive rights over the invention. If one doesn’t protect it, anybody can exploit it commercially once available to the public. To restrict others from utilizing, selling, or making copies, the inventor must file for a patent.",
  },
  {
    question: "What are the important criteria for filing a Patent?",
    answer:
      "An invention needs to have these three main qualities to be patentable:\nNovelty – invention should be new\nInventiveness (Non-obviousness) – should have an inventive step that makes the invention unique\nIndustrial utility/Usefulness – it should not be a mere prototype but it should be working and has to have some use",
  },
  {
    question:
      "Is it mandatory to always file a provisional patent before filing the complete specification?",
    answer:
      "Filing for a provisional patent is an optional step, if you already have complete information about your invention, then you can directly go for complete filing, there is no requirement to file the provisional application for patent.",
  },
  {
    question: "Is the patent valid outside India?",
    answer:
      "A patent filed in India is valid only in India. To register a patent in other countries, separate patents should be filed in the respective countries. No patent is global.\nHowever, filing an application in India enables the applicant to file a corresponding application for the same invention in convention countries or under PCT, within or before the expiry of twelve months from the filing date in India. Patents should be obtained in each country where the applicant requires protection of his invention.",
  },
  {
    question: "How does a patent expire?",
    answer:
      "The patent can expire under following conditions:\nIf it has lived its full term ie. 20 years\nThe patentee failed to pay the annual renewal fee\nThe validity of the patent has been successfully challenged by an opponent by filing an opposition\nThe patent is revoked",
  },
];
const registrationItems = [
  { id: 1, title: "Patent", price: 19999 },
  { id: 3, title: "Startup India Registration", price: 3999 },
];

function Patent() {
  return (
    <>
      <Info
        heading="Don't let your hardwork get copied"
        caption="PATENT your invention and secure your Rights to Commercialise it"
      />
      <Container
        steps={steps}
        stats={stats}
        definition={definition}
        title="Patent"
        benefits={benefits}
        heading={heading}
        questions={questions}
        registrationItems={registrationItems}
        category="Intellectual Property"
      />
      <RecommendedProds />
    </>
  );
}

export default Patent;
