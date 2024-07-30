/* eslint-disable no-unused-vars */
import { useState } from "react";
import styled from "styled-components";

const SlideNavbarContainer = styled.div`
  width: 100%;
  /* background-color: #333; */
  color: #333;
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

  const handleNavItemClick = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  const menuItems = {
    "Talk to Lawyer": [
      { name: "Personal", link: "/consultation" },
      { name: "Business", link: "/legal-advice" },
    ],
    Startup: [
      { name: "Incubation", link: "/incubation" },
      { name: "Funding", link: "/funding" },
      { name: "Mentorship", link: "/mentorship" },
    ],
    Documentation: [
      { name: "Legal Documents", link: "/legal-documents" },
      { name: "Templates", link: "/templates" },
      { name: "Guidelines", link: "/guidelines" },
    ],
    "Partner with Us": [
      { name: "Partnership Benefits", link: "/partnership-benefits" },
    ],
  };

  return (
    <SlideNavbarContainer>
      {Object.keys(menuItems).map((item, index) => (
        <div key={index}>
          <SlideNavItem onClick={() => handleNavItemClick(index)}>
            {item}
          </SlideNavItem>
          <SlideDropdownMenu isOpen={openIndex === index}>
            {menuItems[item].map((dropdownItem, idx) => (
              <SlideDropdownItem key={idx} href={dropdownItem.link}>
                {dropdownItem.name}
              </SlideDropdownItem>
            ))}
          </SlideDropdownMenu>
        </div>
      ))}
    </SlideNavbarContainer>
  );
};
export default SlideOutNavbar;
