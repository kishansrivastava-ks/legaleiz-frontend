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
        menuItem: "Consultation Types",
        links: [
          { name: "Personal", href: "/consultation/personal" },
          { name: "Business", href: "/consultation/business" },
          { name: "Family", href: "/consultation/family" },
        ],
      },
      {
        menuItem: "Legal Areas",
        links: [
          { name: "Criminal Law", href: "/consultation/criminal-law" },
          { name: "Civil Law", href: "/consultation/civil-law" },
          { name: "Corporate Law", href: "/consultation/corporate-law" },
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
        menuItem: "Legal Documents",
        links: [
          { name: "Contracts", href: "/documentation/contracts" },
          { name: "Agreements", href: "/documentation/agreements" },
          { name: "Forms", href: "/documentation/forms" },
        ],
      },
      {
        menuItem: "Templates",
        links: [
          {
            name: "Business Templates",
            href: "/documentation/templates/business",
          },
          {
            name: "Personal Templates",
            href: "/documentation/templates/personal",
          },
          { name: "Legal Templates", href: "/documentation/templates/legal" },
        ],
      },
      {
        menuItem: "Guidelines",
        links: [
          {
            name: "Company Policies",
            href: "/documentation/guidelines/company-policies",
          },
          { name: "HR Guidelines", href: "/documentation/guidelines/hr" },
          { name: "Compliance", href: "/documentation/guidelines/compliance" },
        ],
      },
    ],
    "Partner with Us": [
      {
        menuItem: "Partnership Benefits",
        links: [
          { name: "Revenue Sharing", href: "/partnership/revenue-sharing" },
          { name: "Brand Association", href: "/partnership/brand-association" },
          { name: "Co-Marketing", href: "/partnership/co-marketing" },
        ],
      },
      {
        menuItem: "Become a Partner",
        links: [
          { name: "Join Us", href: "/partnership/join-us" },
          { name: "Affiliate Program", href: "/partnership/affiliate-program" },
          { name: "Referral Program", href: "/partnership/referral-program" },
        ],
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
