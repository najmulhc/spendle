import styled from "styled-components";

interface CardProps {
  margin?: string;
  backgroundColor?: string;
  padding?: string;
  boxShadow?: string;
  borderRadius?: string;
}

export const Card = styled.div<CardProps>`
  margin: ${(props) => props.margin || "0.5rem"};
  background-color: ${(props) => props.backgroundColor || "white"};
  padding: ${(props) => props.padding || "1rem"};
  box-shadow: ${(props) =>
    props.boxShadow || "rgba(0, 0, 0, 0.16) 0px 1px 4px"};
  border-radius: ${(props) => props.borderRadius || "8px"};
`;
