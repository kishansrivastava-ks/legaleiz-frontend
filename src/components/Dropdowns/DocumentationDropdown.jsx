import { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

// Styles

const MenuContainer = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: -300%;
  background-color: white;
  /* border: 1px solid #ccc; */
  width: 60rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  /* z-index: 1; */
`;
const DropdownContainer = styled.div`
  position: relative;
  /* display: inline-block; */
  height: 100%;
  /* background-color: pink; */

  &:hover ${MenuContainer} {
    display: block;
  }
`;

const NavLinkStyled = styled(NavLink)`
  /* padding: 10px 20px; */
  text-decoration: none;
  color: black;
`;

const Columns = styled.div`
  display: flex;
`;

const Column = styled.div`
  flex: 1;
  padding: 10px;
  &:first-child {
    border-right: 1px solid #ccc;
  }
`;

const Label = styled.div`
  padding: 0rem 1rem;
  display: flex;
  font-weight: 500;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }

  display: flex;
  align-items: center;
  & > img {
    margin: 2rem;
    height: 2rem;
  }
`;

const MenuItem = styled(NavLink)`
  padding: 1rem 0;
  font-weight: 500;
  font-size: 1vmax;
  &:hover {
    color: blue;
  }
  display: block;
`;
const ActiveLabel = styled.div`
  border-bottom: 1px solid lightgray;
  padding-bottom: 1rem;
  margin-bottom: -1rem;
`;

const ScrollableColumn = styled(Column)`
  max-height: 300px;
  overflow-y: auto;
  margin-left: 2rem;
  padding: 2rem 0;
  padding-right: 2rem;
  &::-webkit-scrollbar {
    width: 7px;
    border: none;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #007bff; /* Scrollbar thumb color */
    border-radius: 10px; /* Rounded corners */
    /* border: 3px solid #ffffff;  */
    border: none; /* Padding around thumb */
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1; /* Scrollbar track color */
    border-radius: 10px; /* Rounded corners */
  }
`;

// Component
const DocumentationDropdown = () => {
  const [activeLabel, setActiveLabel] = useState(null);
  const labels = [
    {
      label: "Business Contracts",
      icon: "https://img.icons8.com/?size=100&id=42415&format=png&color=000000",
    },
    {
      label: "Personal & Family",
      icon: "https://img.icons8.com/?size=100&id=6884&format=png&color=000000",
    },
    {
      label: "Real Estate",
      icon: "https://img.icons8.com/?size=100&id=19986&format=png&color=000000",
    },
    {
      label: "Notices",
      icon: "https://img.icons8.com/?size=100&id=360&format=png&color=000000",
    },
    {
      label: "HR Policies",
      icon: "https://img.icons8.com/?size=100&id=LeS5bIxWv2Kc&format=png&color=000000",
    },
  ];
  const menuItems = {
    "Business Contracts": [
      "Non Disclosure Agreement NDA",
      "Joint Venture Agreement",
      "Shareholders Agreement",
      "Master Service Agreement",
      "Franchise Agreement",
      "Service Level Agreement",
      "Succession Certificate",
      "Memorandum of Understanding",
      "Consultancy Agreement",
      "Vendor Agreement",
      "Founders Agreement",
      "Noncompete Agreement",
      "Trade License",
      "Legal Heir Certificate",
      "Relinquishment Deed",
      "Share Purchase Agreement",
      "Scope of Work Agreement",
      "GDPR",
      "Finance Agreement",
    ],
    "Personal & Family": [
      "Will Registration",
      "Probate of Will",
      "Power of Attorneys",
    ],
    Notices: [
      "Legal Notice",
      "Legal Notice for Money Recovery",
      "Legal Notice for recovery of dues",
      "Cheque Bounce Notice",
      "Legal Notice Under Consumer Protection Act",
    ],
    "Real Estate": [
      "Rental Agreement",
      "Sale Deed",
      "Gift Deed",
      "Rental Tenant Notice",
    ],
    "HR Policies": ["Employment Agreement", "ESOP", "Payroll Maintenance"],
  };

  return (
    <DropdownContainer>
      <NavLinkStyled>Documentation</NavLinkStyled>
      <MenuContainer>
        <Columns>
          <Column>
            {labels.map((label) => (
              <Label
                key={label.label}
                onMouseEnter={() => setActiveLabel(label.label)}
                onClick={() => setActiveLabel(label.label)}
              >
                <img src={label.icon} alt="document" />
                {label.label}
              </Label>
            ))}
          </Column>
          <ScrollableColumn>
            {activeLabel && (
              <>
                <ActiveLabel>{activeLabel}</ActiveLabel>
                <br />
                {menuItems[activeLabel].map((item) => (
                  <MenuItem
                    to="/documentation/business-contracts/non-disclosure-agreement-nda"
                    key={item}
                  >
                    {item}
                  </MenuItem>
                ))}
              </>
            )}
          </ScrollableColumn>
        </Columns>
      </MenuContainer>
    </DropdownContainer>
  );
};

export default DocumentationDropdown;
