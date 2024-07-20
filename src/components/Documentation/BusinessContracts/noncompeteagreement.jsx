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
      A non-compete agreement (NCA) is a legal contract that limits an
      employee&apos;s ability to work for a competitor or start a competing
      business after leaving their current job. These agreements can be
      important for businesses to protect their confidential information and
      trade secrets, but they can also be controversial, as they can limit an
      employee&apos;s ability to find new employment.
    </p>
    <p>
      This page provides a general overview of non-compete agreements. It&apos;s
      important to remember that NCA enforceability varies greatly depending on
      your location. We recommend consulting with an employment lawyer to
      understand how non-compete agreements apply in your specific situation.
    </p>
  </StyledOverView>
);

export const Address = () => {
  const list = [
    {
      title: "Competitors",
      description:
        "The agreement may specify which companies or types of businesses the employee is prohibited from working for",
    },
    {
      title: "Geographic Area",
      description:
        "The agreement may limit the geographic scope of the restriction, such as a certain city, state, or region",
    },
    {
      title: "Time Period",
      description:
        "The agreement will define the duration of the non-compete clause, typically for a specific period following employment termination.",
    },
  ];
  return (
    <>
      <p style={{ marginBottom: "1rem" }}>
        Non-compete agreements typically outline restrictions in three key
        areas:
      </p>
      <List list={list} />
    </>
  );
};

export const Enforceable = () => {
  const list = [
    {
      title: "Reasonableness",
      description:
        "The restrictions outlined in the agreement should be reasonable to protect the employer's legitimate business interests",
    },
    {
      title: "Public Policy",
      description:
        "Some states have laws that limit or restrict the enforceability of non-compete agreements, particularly for low-wage earners",
    },
  ];
  return (
    <>
      <p>
        No, not always. Courts may consider a non-compete agreement
        unenforceable if it is deemed to be too broad or restrictive. Here are
        some factors that can affect enforceability:
      </p>
      <List list={list} />
    </>
  );
};

export const WhatShouldYouDo = () => {
  const list = [
    {
      title: "Carefully review the agreement.",
      description: "Don't hesitate to ask questions if anything is unclear.",
    },
    {
      title: "Understand your rights",
      description: "Research non-compete agreements in your jurisdiction",
    },
    {
      title: "Seek legal counsel",
      description:
        "An employment lawyer can advise you on the                     enforceability of the agreement and your options",
    },
  ];
  return <List list={list} />;
};
