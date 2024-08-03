/* eslint-disable no-unused-vars */
import { useState } from "react";
import styled from "styled-components";
import MobileModal from "./MobileModal";

const SlideNavbarContainer = styled.div`
  width: 100%;
  /* background-color: #333; */
  color: rgb(51, 51, 51);
  overflow: hidden;
  /* margin-top: 2rem; */
`;
const SlideNavItem = styled.div`
  padding: 1rem;
  cursor: pointer;
  /* border-bottom: 1px solid; */
  margin-bottom: 5px;
  border-radius: 3px;
  padding: 1.5rem 1rem;
  background-color: #e7e4e4;
  font-weight: 600;
  letter-spacing: 2px;
  &:hover {
  }
`;
const SlideDropdownMenu = styled.div`
  max-height: ${(props) => (props.isOpen ? "200px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  margin-left: 2rem;
`;
const SlideDropdownItem = styled.div`
  padding: 1rem;
  font-weight: 500;
  letter-spacing: 2px;
  line-height: 1;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    /* background-color: #666; */
  }
`;
const SlideOutNavbar = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", links: [] });

  const handleNavItemClick = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  const handleModalOpen = (menuItem, links) => {
    setModalContent({ title: menuItem, links });
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const menuItems = {
    "Talk to Lawyer": [
      {
        menuItem: "Personal",
        links: [
          { name: "Personal", href: "/legal-consultation" },
          { name: "Family & Matrimonial", href: "/legal-consultation/consult" },
          { name: "Divorce", href: "/divorce-consultation" },
          { name: "Property", href: "/property-consultation" },
          { name: "Will", href: "/legal-consultation/consult" },
          { name: "Labour & Employment", href: "/legal-consultation/consult" },
          { name: "Consumer Protection", href: "/legal-consultation/consult" },
          { name: "Cyber Crime", href: "/legal-consultation/consult" },
          { name: "Cheque Bounce", href: "/legal-consultation/consult" },
        ],
      },
      {
        menuItem: "Business",
        links: [
          { name: "Business", href: "/business-consultation" },
          { name: "Company Matters", href: "/business-consultation/consult" },
          {
            name: "HR & Labour Compliance",
            href: "/business-consultation/consult",
          },
          {
            name: "Trademark & Copyrights",
            href: "/business-consultation/consult",
          },
          {
            name: "Investment & Fundraise",
            href: "/business-consultation/consult",
          },
          { name: "Direct Tax", href: "/business-consultation/consult" },
          { name: "GST", href: "/business-consultation/consult" },
          {
            name: "Company (ROC) Compliance",
            href: "/business-consultation/consult",
          },
          { name: "Debt Recovery", href: "/business-consultation/consult" },
          { name: "NCLT Matter", href: "/business-consultation/consult" },
          {
            name: "Another Business Legal Matter",
            href: "/business-consultation/consult",
          },
        ],
      },
    ],
    Startup: [
      {
        menuItem: "Company Formation",
        links: [
          {
            name: "Partnership Firm",
            href: "/startup/company-formation/partnership-firm",
          },
          {
            name: "Private Limited Company",
            href: "/startup/company-formation/private-limited-company",
          },
          {
            name: "One Person Company",
            href: "/startup/company-formation/one-person-company",
          },
          {
            name: "Limited Liability Partnership",
            href: "/startup/company-formation/limited-liability-partnership",
          },
        ],
      },
      {
        menuItem: "Intellectual Property",
        links: [
          {
            name: "Copyright",
            href: "/startup/intellectual-property/copyright",
          },
          {
            name: "Respond to TM Objections",
            href: "/startup/intellectual-property/respond-to-tm-objections",
          },
          { name: "Patent", href: "/startup/intellectual-property/patent" },
          {
            name: "Trademark",
            href: "/startup/intellectual-property/trademark",
          },
        ],
      },
      {
        menuItem: "Registrations & Licenses",
        links: [
          {
            name: "GST Registration",
            href: "/startup/registrations-and-licenses/gst-registration",
          },
          {
            name: "Export Import Code",
            href: "/startup/registrations-and-licenses/export-import-code",
          },
          {
            name: "Annual GST Return Filing",
            href: "/startup/registrations-and-licenses/annual-gst-return-filing",
          },
        ],
      },
    ],
    Documentation: [
      {
        menuItem: "Business Contracts",
        links: [
          {
            name: "Non Disclosure Agreement NDA",
            href: "/documentation/business-contracts/non-disclosure-agreement-nda",
          },
          {
            name: "Joint Venture Agreement",
            href: "/documentation/business-contracts/joint-venture-agreement",
          },
          {
            name: "Shareholders Agreement",
            href: "/documentation/business-contracts/shareholders-agreement",
          },
          {
            name: "Master Service Agreement",
            href: "/documentation/business-contracts/master-service-agreement",
          },
          {
            name: "Franchise Agreement",
            href: "/documentation/business-contracts/franchise-agreement",
          },
          {
            name: "Service Legal Agreement",
            href: "/documentation/business-contracts/service-legal-agreement",
          },
          {
            name: "Succession Certificate",
            href: "/documentation/business-contracts/succession-certificate",
          },
          {
            name: "Memorandum of Understanding",
            href: "/documentation/business-contracts/memorandum-of-understanding",
          },
          {
            name: "Consultancy Agreement",
            href: "/documentation/business-contracts/consultancy-agreement",
          },
          {
            name: "Vendor Agreement",
            href: "/documentation/business-contracts/vendor-agreement",
          },
          {
            name: "Founders Agreement",
            href: "/documentation/business-contracts/founders-agreement",
          },
          {
            name: "Noncompete Agreement",
            href: "/documentation/business-contracts/noncompete-agreement",
          },
          {
            name: "Trade License",
            href: "/documentation/business-contracts/trade-license",
          },
          {
            name: "Legal Heir Certificate",
            href: "/documentation/business-contracts/legal-heir-certificate",
          },
          {
            name: "Relinquishment Deed",
            href: "/documentation/business-contracts/relinquishment-deed",
          },
          {
            name: "Share Purchase Agreement",
            href: "/documentation/business-contracts/share-purchase-agreement",
          },
          {
            name: "Scope of Work Agreement",
            href: "/documentation/business-contracts/scope-of-work-agreement",
          },
          { name: "GDPR", href: "/documentation/business-contracts/gdpr" },
          {
            name: "Finance Agreement",
            href: "/documentation/business-contracts/finance-agreement",
          },
        ],
      },
      {
        menuItem: "Personal And Family",
        links: [
          {
            name: "Will Registration",
            href: "/documentation/personal-and-family/will-registration",
          },
          {
            name: "Probate of Will",
            href: "/documentation/personal-and-family/probate-of-will",
          },
          {
            name: "Power of Attorneys",
            href: "/documentation/personal-and-family/power-of-attorneys",
          },
        ],
      },
      {
        menuItem: "Notices",
        links: [
          { name: "Legal Notice", href: "/documentation/notices/legal-notice" },
          {
            name: "Legal Notice for Money Recovery",
            href: "/documentation/notices/legal-notice-for-money-recovery",
          },
          {
            name: "Legal Notice for recovery of dues",
            href: "/documentation/notices/legal-notice-for-recovery-of-dues",
          },
          {
            name: "Cheque Bounce Notice",
            href: "/documentation/notices/cheque-bounce-notice",
          },
          {
            name: "Legal Notice Under Consumer Protection Act",
            href: "/documentation/notices/legal-notice-under-consumer-protection-act",
          },
        ],
      },
      {
        menuItem: "Real Estate",
        links: [
          {
            name: "Rental Agreement",
            href: "/documentation/real-estate/rental-agreement",
          },
          { name: "Sale Deed", href: "/documentation/real-estate/sale-deed" },
          { name: "Gift Deed", href: "/documentation/real-estate/gift-deed" },
          {
            name: "Rental Tenant Notice",
            href: "/documentation/real-estate/rental-tenant-notice",
          },
        ],
      },
      {
        menuItem: "HR Policies",
        links: [
          {
            name: "Employment Agreement",
            href: "/documentation/hr-policies/employment-agreement",
          },
          { name: "ESOP", href: "/documentation/hr-policies/esop" },
          {
            name: "Payroll Maintenance",
            href: "/documentation/hr-policies/payroll-maintenance",
          },
        ],
      },
    ],
    "Partner with Us": [
      {
        menuItem: "Become a Partner",
        links: [{ name: "Join Us", href: "/partner-with-us" }],
      },
    ],
  };

  return (
    <>
      <SlideNavbarContainer>
        {Object.keys(menuItems).map((item, index) => (
          <div key={index}>
            <SlideNavItem onClick={() => handleNavItemClick(index)}>
              {item}
            </SlideNavItem>
            <SlideDropdownMenu isOpen={openIndex === index}>
              {menuItems[item].map((dropdownItem, idx) => (
                <SlideDropdownItem
                  key={idx}
                  onClick={() =>
                    handleModalOpen(dropdownItem.menuItem, dropdownItem.links)
                  }
                >
                  {dropdownItem.menuItem}
                </SlideDropdownItem>
              ))}
            </SlideDropdownMenu>
          </div>
        ))}
      </SlideNavbarContainer>
      <MobileModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        title={modalContent.title}
        links={modalContent.links}
      />
    </>
  );
};
export default SlideOutNavbar;
