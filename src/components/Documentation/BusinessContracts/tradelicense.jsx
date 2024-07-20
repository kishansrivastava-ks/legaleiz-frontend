/* eslint-disable no-unused-vars */
import styled from "styled-components";
import List from "../List";

const StyledOverView = styled.div`
  /* padding: 5px 10px; */
  border-radius: 5px;
  text-align: justify;
  & > p {
    line-height: 1.4;
    font-size: 1.8rem;
  }
`;

export const Overview = () => (
  <StyledOverView>
    <p>
      A trade license is a vital document for any business operating within a
      specific jurisdiction. It acts as a permit, granting legal authorization
      to conduct your commercial activities. This webpage serves as a
      comprehensive guide to trade licenses, outlining their purpose, benefits,
      and the application process
    </p>
    <p>
      <b>What is a Trade License?</b>
    </p>
    <p>
      A trade license is essentially a government-issued permission that allows
      a business to operate legally within a specific location. It verifies that
      the business adheres to local regulations and fulfills necessary
      requirements.
    </p>
  </StyledOverView>
);

export const Benefits = () => {
  const list = [
    {
      title: "Legality",
      description:
        ": A trade license signifies your business operates legally, reducing the risk of fines or closure",
    },
    {
      title: "Credibility",
      description:
        " Holding a license enhances your business's credibility and professionalism in the eyes of customers and potential partners",
    },
    {
      title: "Compliance",
      description:
        "The application process ensures your business complies with essential regulations, such as health and safety standards",
    },
    {
      title: "Taxation",
      description:
        "A trade license is often a prerequisite for obtaining a tax registration number, crucial for tax filing",
    },
  ];
  return <List list={list} />;
};

export const WhoNeeds = () => {
  const list = [
    {
      title: "",
      description: "Retail stores",
    },
    {
      title: "",
      description: "Restaurants",
    },
    {
      title: "",
      description: "Service providers (e.g., salons, repair shops)",
    },
    {
      title: "",
      description:
        "Online businesses with a physical presence (e.g., warehouse, storefront)",
    },
  ];
  return (
    <>
      <p style={{ marginBottom: "1rem" }}>
        Most businesses, regardless of size or industry, require a trade
        license. This typically includes:
      </p>
      <List list={list} />
    </>
  );
};

export const Apply = () => {
  const list = [
    {
      title: "1. Research",
      description:
        "Identify the government agency responsible for issuing trade licenses in your area. Their website often provides detailed informationand application forms",
    },
    {
      title: "2. Gather Documents",
      description:
        "Compile the required documentation, which may include business registration documents, proof of address, and anyindustry-specific permits.",
    },
    {
      title: "Submission",
      description:
        "Submit the completed application form and all necessary documents alongside the required fees. This may be possible online or in person.",
    },
    {
      title: "Processing",
      description:
        "The issuing authority will review your application and conduct any necessary inspections",
    },
    {
      title: "Issuance",
      description:
        "Upon approval, you will receive your official trade license.",
    },
  ];
  return (
    <>
      <p style={{ marginBottom: "1rem" }}>
        The application process for a trade license varies depending on your
        location. However, it generally involves these steps:
      </p>
      <List list={list} />
    </>
  );
};

export const Renewal = () => {
  const list = [
    {
      title: "",
      description:
        "A  legal heir certificate is a crucial document that verifies the legal inheritors of a deceased person's estate. It plays a vital role in claiming ownership and managing the assets left behind, such as property, bank accounts, investments, and other financial holdings.",
    },
  ];
  return <List list={list} />;
};
