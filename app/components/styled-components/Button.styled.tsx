import styled from "styled-components";
export const Button = styled.button`
  display: inline-block;
  padding: 10px 20px;
  background-color: #4f23e1;
  color: white;
  border: none;
  position: relative;
  overflow: hidden;
  clip-path: polygon(8% 0, 100% 0%, 92% 100%, 0 100%);
  transition: all 0.3s ease;

  &:hover {
    background-color: #371b94;
    clip-path: polygon(0% 0, 92% 0%, 100% 100%, 8% 100%);
    cursor: pointer;
  }
`;
