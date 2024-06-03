import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`;
const Heading = styled.h1`
  font-size: 2vmax;
  margin-bottom: 20px;
  text-align: center;
  font-weight: 500;
  letter-spacing: 2px;
`;
const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
  padding: 1.5vmax 0;
`;
const StyledCheckbox = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #007bff;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  transition: background 0.3s;
  margin-right: 2rem;

  &:checked {
    background: #007bff;
  }

  &:checked::before {
    content: "✓";
    display: block;
    text-align: center;
    color: white;
    font-size: 14px;
    line-height: 18px;
  }
`;
const Total = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.2vmax;
  font-weight: bold;
  margin-bottom: 20px;
`;
const PaymentLogos = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  padding: 0.5vmax 0;
`;
const Logo = styled.img`
  height: 40px;
`;
const RegisterButton = styled.button`
  display: block;
  width: 200px;
  padding: 10px 20px;
  margin: 0 auto;
  font-size: 18px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;
function Register() {
  const [selectedItems, setSelectedItems] = useState([]);
  const items = [
    { id: 1, title: "Partnership Firm", price: 9999 },
    { id: 2, title: "GST Registration", price: 3499 },
    { id: 3, title: "Startup India Registration", price: 3999 },
    { id: 4, title: "MSME Registration", price: 1999 },
  ];
  const logos = [
    "https://img.icons8.com/?size=100&id=11079&format=png&color=FA5252",
    "https://img.icons8.com/?size=100&id=11079&format=png&color=FA5252",
    "https://img.icons8.com/?size=100&id=11079&format=png&color=FA5252",
    "https://img.icons8.com/?size=100&id=11079&format=png&color=FA5252",
    "https://img.icons8.com/?size=100&id=11079&format=png&color=FA5252",
    "https://img.icons8.com/?size=100&id=11079&format=png&color=FA5252",
  ];

  const handleCheckboxChange = (itemId) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.includes(itemId)
        ? prevSelectedItems.filter((id) => id !== itemId)
        : [...prevSelectedItems, itemId]
    );
  };
  const calculateTotal = () => {
    return items
      .filter((item) => selectedItems.includes(item.id))
      .reduce((total, item) => total + item.price, 0);
  };

  return (
    <Container>
      <Heading>Company Formation</Heading>

      <ItemList>
        {items.map((item) => (
          <Item key={item.id}>
            <label>
              <StyledCheckbox
                checked={selectedItems.includes(item.id)}
                onChange={() => handleCheckboxChange(item.id)}
              />
              {item.title}
            </label>
            <span>₹{item.price}</span>
          </Item>
        ))}
      </ItemList>

      <Total>
        <span>Grand Total</span>
        <span>₹{calculateTotal()}</span>
      </Total>

      <PaymentLogos>
        {logos.map((logo, index) => (
          <Logo key={index} src={logo} alt={`Payment Logo ${index + 1}`} />
        ))}
      </PaymentLogos>

      <RegisterButton>Register My Team</RegisterButton>
    </Container>
  );
}

export default Register;
