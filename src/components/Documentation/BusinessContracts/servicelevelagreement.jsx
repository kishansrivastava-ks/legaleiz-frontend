/* eslint-disable no-unused-vars */
import QuestionsContainer from "../../StartupPages/QuestionsContainer";
import List from "../List";
import OverviewTemplate from "../OverviewTemplate";

export const Overview = () => {
  const list = [
    "A service-level agreement (SLA) is a signed document between a service provider and its customers that specifies the same services to be offered and the service standards that the provider must meet for a determined period of time.",

    "Service providers are required to use SLAs to assist them in controlling expectations of customers and define the risk level and situations under which they are not responsible for outages or poor performance. Customers can benefit from SLAs as well, because the contract describes the service's performance characteristics, which may be equated to the SLAs of other vendors, and creates ways for resolving service issues.",

    "The SLA is one of two fundamental agreements that service providers typically have with their customers. Many service providers draft a professional service agreement to spell out the general policies and procedures under which they will work with customers.",

    "A service-level commitment (SLC) is a broader version of SLA management. A Service Level Agreement differs from a contract in that it is bi - directional and includes two teams. An SLC, on the other hand, is a one-way responsibility that creates what a team can assure its clients at any given time.",
  ];
  return <OverviewTemplate list={list} />;
};

export const Drafting = () => {
  const list = [
    {
      title: "",
      description:
        "Prepare the SLA at the beginning of the process to give yourself plenty of time to think about the drafting and the function it must fulfil",
    },
    {
      title: "",
      description:
        "SLA needs to be imperfect and realistic. For it to be lasting, it must accomplish its goals and benefit both parties",
    },
    {
      title: "",
      description:
        "SLA must be clear in its description of the service because it will need to be checked.",
    },
    {
      title: "",
      description: "The compensation provision is essential",
    },
    {
      title: "",
      description:
        "The review process shouldn't take too long because doing so would negate its own goal and force the consumer to put up with poor quality for an extended period",
    },
    {
      title: "",
      description:
        "In the event of a serious failure, the option to terminate must be included. severe failure",
    },
  ];
  return <List list={list} />;
};

export const Types = () => {
  const list = [
    {
      title: "Customer Service Level Agreement",
      description:
        "A customer service-level agreement is a contractual agreement between a service provider and its external customers. It is also known as an external service agreement. Here, the customer and service provider will reach an agreement on the services that will be provided.",
    },
    {
      title: "Internal Service Level Agreement",
      description:
        " An internal service level agreement (SLA) is a document that outlines the terms of a service agreement between different departments or teams within an organisation. It specifies the expectations and responsibilities of each party involved in the service, as well as the measures that will be taken to ensure that the service is delivered in a consistent and reliable manner.",
    },
    {
      title: "Multilevel Service Level Agreement",
      description:
        "A multilevel service level agreement (SLA) is a contract between a service provider and a customer that outlines the terms and conditions of the services provided. This type of SLA typically includes multiple levels of service, each with its own set of performance metrics and associated penalties or incentives.",
    },
  ];
  return (
    <>
      <p style={{ marginBottom: "2rem" }}>
        There are three types of SLA agreement. They are:
      </p>
      <List list={list} />
    </>
  );
};
export const Advantages = () => {
  const list = [
    {
      title: "",
      description:
        "This eliminates the possibility of unrealistic expectations",
    },
    {
      title: "",
      description:
        "An SLA serves as a proof for the person receiving the services because it elaborates on the promised services in detail",
    },
    {
      title: "",
      description:
        "The SLA serves as a channel for customers to air their grievances by outlining the process for providing feedback and complaints",
    },
    {
      title: "",
      description:
        "An Service level agreement is an excellent tool for improving customer service",
    },
    {
      title: "",
      description:
        "SLA help companies and clients communicate more effectively",
    },
    {
      title: "",
      description: "This increases the transparency of transactions.",
    },
  ];
  return (
    <>
      <p style={{ marginBottom: "2rem" }}>
        The extent and magnitude to which a provider could provide services and
        utilities are specified in a service level agreement (SLA).
      </p>
      <List list={list} />
    </>
  );
};
export const Components = () => {
  const list = [
    {
      title: "An overview of the agreement",
      description:
        "This first section outlines the agreement's fundamentals, including the involved parties, the launch date, and a general description of the services provided.",
    },
    {
      title: "The services",
      description:
        "The SLA should include detailed explanations of all services provided under all possible conditions, as well as turnaround time.",
    },
    {
      title: "Provider interpretations",
      description:
        "It should include how services are delivered, as to if maintenance services are offered, operating hours, dependencies, a process outline, and a list of all applications and technologies used.",
    },
    {
      title: "Exclusions",
      description:
        "Providing the requirements that are not supplied ought to be properly delineated in order to prevent misunderstandings and the possibility of third-party assumptions.",
    },
    {
      title: "Service provision",
      description:
        "Metrics for performance measurement and levels of performance are established. The client and consultancy services should agree on a list of all the performance measures that will be used to evaluate the service levels of the provider.",
    },
    {
      title: "Redressing",
      description:
        "Remuneration or payment should be defined if a supplier fails to meet their SLA.",
    },
    {
      title: "Stakeholders",
      description:
        "The agreement defines the involved parties and establishes their respective responsibilities.",
    },
    {
      title: "Security",
      description:
        "The service provider's security measures are all defined in this section. This usually entails creating and approving anti-poaching, IT security, and nondisclosure agreement.",
    },
    {
      title: "Risk management",
      description:
        "Disaster recovery risk management procedures and a plan for disaster recovery will be developed and clearly communicated in this section.",
    },
    {
      title: "Monitoring and reporting on services",
      description:
        "The current functions, traceability intervals, and contract stakeholders are all defined in this section. On a regular basis, processes have been reviewed and changed. The service level agreement (SLA) and all formed key performance measures (KPIs) will be evaluated on a regular basis. This process is defined, as is the suitable process for making changes.",
    },
    {
      title: "Termination procedure",
      description:
        "The SLA will outline the circumstances under which the accord can be revoked or expires. Both parties should agree on a notice period.",
    },
    {
      title: "Signatures",
      description:
        "Finally, both parties' stakeholders and authorised participants must sign the contract to prove their accord with every detail and process.",
    },
  ];
  return (
    <>
      <p style={{ marginBottom: "2rem" }}>
        The following are the key components of a SLA:
      </p>
      <List list={list} />
    </>
  );
};
export const Essentiality = () => {
  const list = [
    {
      title: "",
      description:
        "An SLA outlines the services that the provider will offer and what the customer can expect",
    },
    {
      title: "",
      description:
        "By setting expectations, an SLA helps ensure that both parties are on the same page, and the customer knows what to expect.",
    },
    {
      title: "",
      description:
        "An SLA defines the level of service that the provider must meet, providing a benchmark against which performance can be measured",
    },
    {
      title: "",
      description:
        "An SLA holds the service provider accountable for meeting the defined service level and can help ensure that the provider takes responsibility for any issues that may arise.",
    },
  ];
  return (
    <>
      <p style={{ marginBottom: "2rem" }}>
        The following are some of the reasons why an SLA is essential:
      </p>
      <List list={list} />
    </>
  );
};
export const NeedsAndClauses = () => {
  const list1 = [
    {
      title: "",
      description:
        "Service Level Agreements (SLAs) are beneficial for any organisation that provides services to its customers. This includes IT service providers, internet service providers, cloud service providers, managed service providers, and other similar organisations.",
    },
  ];
  const list2 = [
    {
      title: "",
      description: "Consult with a lawyer",
    },
    {
      title: "",
      description: "Impose a cap on the number of indemnitees",
    },
    {
      title: "",
      description:
        "Impose monetary boundaries on the clause, impose deadlines, and specify the period when the obligation to indemnify arises.",
    },
  ];
  return (
    <>
      <List list={list1} />
      <h3>SLA’s and Indemnification Clauses</h3>
      <p style={{ marginBottom: "2rem" }}>
        Indemnification clauses are a standard part of many service contracts,
        including SLAs. These clauses typically state that the service provider
        will be held harmless from any liability arising from the services they
        provide. In an SLA, an indemnification clause may address issues such as
        breach of confidentiality or breach of security. It&apos;s important to
        carefully review indemnification clauses in an SLA and ensure that they
        align with your organisation&apos;s needs and expectations. A service
        supplier has several options for limiting the extent of
        indemnifications.
      </p>
      <List list={list2} />
    </>
  );
};
export const PerformanceMetrics = () => {
  const list = [
    {
      title: "Uptime/Availability",
      description:
        "This assesses the duration of time a service or system is accessible for use, usually indicated as a percentage of uptime per month or year",
    },
    {
      title: "Response Time",
      description:
        "This assesses the duration of time a service or system is accessible for use, usually indicated as a percentage of uptime per month or year",
    },
    {
      title: "Resolution Time",
      description:
        "This measures how fast a service provider responds to a customer inquiry or request, typically denoted in seconds or minutes",
    },
    {
      title: "Mean Time to Repair (MTTR)",
      description:
        "This calculates the time taken by a service provider to solve a customer issue or incident, generally expressed in hours or days",
    },
    {
      title: "Mean Time Between Failures (MTBF)",
      description:
        "This determines the average time a service provider needs to fix a system or service after an incident occurs, typically represented in hours or days",
    },
    {
      title: "Quality of Service (QoS",
      description:
        "This measures the average time interval between failures or incidents in a system or service, usually indicated in hours or days",
    },
    {
      title: "Customer Satisfaction",
      description:
        "This assesses the level of satisfaction of customers with the service provided by a service provider, usually expressed on a scale from 1 to 5 or 1 to 10",
    },
    {
      title: "Escalation Time",
      description:
        "This measures the time taken by a service provider to escalate an issue or incident to a higher level of support or management, usually expressed in hours or minutes",
    },
    {
      title: "Abandoned Calls or Transactions",
      description:
        "This measures the number of customer calls or transactions that are abandoned before completion due to long wait times or poor service, usually expressed as a percentage of total calls or transactions.",
    },
  ];
  return (
    <>
      <p style={{ marginBottom: "2rem" }}>
        SLA (Service Level Agreement) performance metrics are used to measure
        and assess the performance of a service provider against agreed-upon
        service levels. The following are typical performance metrics used in
        SLAs:
      </p>
      <List list={list} />
    </>
  );
};
export const SLAinCloudComputing = () => {
  const list1 = [
    "A service level agreement (SLA) in cloud computing is a contract between a cloud service provider (CSP) and a customer that defines the level of service the CSP will provide. The SLA typically includes details on availability, performance, and support.",
    "The SLA is an important document that helps ensure that both parties are on the same page and that the customer gets the level of service they expect. It also helps to avoid disputes and disagreements down the road.",
    "The SLA should be specific and measurable so that both parties know exactly what is expected. It should also be flexible enough to allow for changes in the service level over time",
    "The SLA should be reviewed regularly to ensure that it is still meeting the needs of both parties",
  ];
  const list2 = [
    {
      title: "Availability",
      description:
        "This is the percentage of time that the service is expected to be available.",
    },
    {
      title: "Performance",
      description: "This is the speed and reliability of the service.",
    },
    {
      title: "Support",
      description:
        "This is the level of support the CSP will provide, such as 24/7 or email support.",
    },
    {
      title: "Escalation procedures",
      description:
        "This is the process for escalating issues to a higher level of support.",
    },
    {
      title: "Compensation",
      description:
        "This is the amount the CSP will pay the customer if the service does not meet the SLA.",
    },
  ];
  return (
    <>
      <OverviewTemplate list={list1} />
      <h4 style={{ marginBottom: "1.5rem" }}>
        Here are some of the critical elements of an SLA in cloud computing:
      </h4>
      <List list={list2} />
      <p>
        The SLA is an important document that helps ensure that both parties are
        on the same page and that the customer gets the level of service they
        expect. It is also a valuable tool for resolving disputes and
        disagreements.
      </p>
    </>
  );
};
export const Penalties = () => {
  const list = [
    {
      title: "Services Offered",
      description:
        "Includes elements like database access, data centre resources, and network reliability. As a disincentive against service outages, which might damage the company's bottom line, penalties should be introduced",
    },
    {
      title: "Service Excellence",
      description:
        "Involves performance guarantees, the amount of mistakes that can be present in a good or service, process flaws, and other quality-related problems when breached a penalty can be introduced",
    },
    {
      title: "Monetary Sanctions",
      description:
        "Requiring the vendor to pay the client back the agreed-upon figure for damages.",
    },
  ];
  return (
    <>
      <p style={{ marginBottom: "2rem" }}>
        Service Level Agreement (SLA) fines are implemented as corrective
        actions to ensure compliance with the terms of the contract. The
        specific consequences vary depending on the agreement. Here are some
        instances:
      </p>
      <List list={list} />
    </>
  );
};
export const Transferable = () => {
  const list1 = [
    "Whether an SLA is transferable depends on the specific terms of the agreement. Some SLAs are specifically designed to be transferable, while others are not.",
    "If an SLA is transferable, it means that the customer can transfer the rights and obligations under the agreement to another party. This can be useful if the customer is selling their business or if they are outsourcing their IT services.",
    "If an SLA is not transferable, the customer will need to obtain the permission of the CSP before they can transfer the rights and obligations under the agreement.",
  ];
  const list2 = [
    {
      title: "",
      description:
        "The specific terms of the agreement: Some SLAs may specifically prohibit transfer, while others may be silent on the issue.",
    },
    {
      title: "",
      description:
        "The nature of the service: Some services, such as those that are customized to the customer's specific needs, may not be transferable.",
    },
    {
      title: "",
      description:
        "The business relationship between the customer and the CSP: If the customer has a long-term relationship with the CSP, the CSP may be more likely to agree to a transfer.",
    },
  ];
  const list3 = [
    {
      title: "",
      description:
        "Make sure that the new party is aware of the terms and conditions of the SLA.",
    },
    {
      title: "",
      description: "Get the permission of the CSP before you transfer the SLA.",
    },
    {
      title: "",
      description: "Make sure that the transfer is properly documented.",
    },
    {
      title: "",
      description:
        "Monitor the performance of the new party to ensure that they are meeting the SLA.  ",
    },
  ];
  return (
    <>
      <OverviewTemplate list={list1} />
      <h4 style={{ marginBottom: "2rem" }}>
        Here are some of the factors that may affect the transferability of an
        SLA:
      </h4>
      <List list={list2} />
      <h4 style={{ marginBottom: "2rem" }}>
        Here are some of the things to keep in mind when transferring an SLA:
      </h4>
      <List list={list3} />
    </>
  );
};
export const Revision = () => {
  const list = [
    {
      title: "",
      description:
        "When the service provider stops providing an existing service or adds a new service",
    },
    {
      title: "",
      description: "When the customer's business requirements change",
    },
    {
      title: "",
      description: "When workloads change",
    },
    {
      title: "",
      description: "When measurement tools, processes, and metrics improve",
    },
    {
      title: "",
      description:
        "When the service provider's technical capabilities change, such as when new technology or more dependable equipment enables the vendor to provide faster services.",
    },
  ];
  return <List list={list} />;
};
export const WhyLegalEiz = () => {
  const list = [
    "A poorly written SLA agreement can jeopardise the provider-customer relationship. As a result, seeking legal counsel is critical. Vakilsearch helps in drafting the perfect SLA documents. We also allow a maximum of two rounds of iteration at zero cost. If any alterations are required, our attorneys will conduct them on your behalf. With the assistance of Vakilsearch, we will provide you with the best experience possible because we house experts with in-depth technical knowledge who will direct you every step of the way. We will always be available to assist you with client-centred, trustworthy, and moral service standards.",
  ];
  return <OverviewTemplate list={list} />;
};
export const FAQ = () => {
  const questions = [
    {
      question: "What is the purpose of service-level agreement?",
      answer:
        "An agreement that defines what numerous IT groups inside a corporation intend to provide a service or set of services is known as an operational level agreement (OLA).",
    },
    {
      question: "What is the life cycle of a SLA?",
      answer:
        "Client, internal, and transdisciplinary service-level agreements are the three types of SLAs. A customer service-level agreement is a legally binding contract between a service provider and its clients. An external service contract is another name for it.",
    },
    {
      question: "How is SLA calculated?",
      answer:
        "The majority of service providers make statistics available for measuring a SLA, primarily through an online site. Clients should start investigating whether SLAs are being managed to meet and whether they are qualified for letters of credit or other SLA penalties",
    },
    {
      question: "What are the three types of SLAs?",
      answer:
        "The service level agreement (SLA) lifecycle governs it from its initial identification to its activation and, finally, termination when it is no longer required. A service level agreement can go through the service level agreement lifecycle.",
    },
    {
      question: "What exactly is an operational level agreement?",
      answer:
        "An SLA's objective is to give the customer the knowledge they need to comprehend and utilise the contracted services. It is essential that the SLAs include the data needed to use and oversee service delivery.",
    },
  ];
  return <QuestionsContainer heading={false} questions={questions} />;
};
