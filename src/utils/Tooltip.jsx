/* eslint-disable react/prop-types */
import styled from "styled-components";

const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;

  &:hover .tooltip-text {
    visibility: visible;
    opacity: 1;
  }
`;

const TooltipText = styled.span`
  visibility: hidden;
  width: max-content;
  /* background-color: #000; */
  color: #fff;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 3px;
  padding: 5px;
  position: absolute;
  z-index: 100;
  /* bottom: 0;  */
  /* left: 100%;     */
  top: 100%;
  /* margin-left: -200%; */
  right: 50%;
  opacity: 0;
  transition: opacity 0.3s;
  font-size: 1.3rem;

  /* &:after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
  } */
`;

const Tooltip = ({ children, text }) => (
  <TooltipContainer>
    {children}
    <TooltipText className="tooltip-text">{text}</TooltipText>
  </TooltipContainer>
);

export default Tooltip;
