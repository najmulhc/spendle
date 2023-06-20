import styled from "styled-components";

interface TypographyProps {
  fontSize?: string;
  color?: string;
  fontWeight?: number;
  textAlign?: string;
  margin?: string;
  padding?: string;
}

export const H1 = styled.h1<TypographyProps>`
  font-size: ${(props) => props.fontSize || "2rem"};
  color: ${(props) => props.color || "#121212"};
  font-weight: ${(props) => props.fontWeight || 600};
  text-align: ${(props) => props.textAlign || "left"};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
`;

export const H2 = styled.h2<TypographyProps>`
  font-size: ${(props) => props.fontSize || "1.75rem"};
  color: ${(props) => props.color || "#232323"};
  font-weight: ${(props) => props.fontWeight || 500};
  text-align: ${(props) => props.textAlign || "left"};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
`;

export const H3 = styled.h3<TypographyProps>`
  font-size: ${(props) => props.fontSize || "1.25rem"};
  color: ${(props) => props.color || "#232323"};
  font-weight: ${(props) => props.fontWeight || 500};
  text-align: ${(props) => props.textAlign || "left"};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
`;

export const H4 = styled.h4<TypographyProps>`
  font-size: ${(props) => props.fontSize || "1.125rem"};
  color: ${(props) => props.color || "#232323"};
  font-weight: ${(props) => props.fontWeight || 500};
  text-align: ${(props) => props.textAlign || "left"};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
`;

export const H5 = styled.h5<TypographyProps>`
  font-size: ${(props) => props.fontSize || "1rem"};
  color: ${(props) => props.color || "#232323"};
  font-weight: ${(props) => props.fontWeight || 500};
  text-align: ${(props) => props.textAlign || "left"};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
`;

export const H6 = styled.h6<TypographyProps>`
  font-size: ${(props) => props.fontSize || "0.875rem"};
  color: ${(props) => props.color || "#232323"};
  font-weight: ${(props) => props.fontWeight || 500};
  text-align: ${(props) => props.textAlign || "left"};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
`;

export const P = styled.p<TypographyProps>`
  font-size: ${(props) => props.fontSize || "1rem"};
  color: ${(props) => props.color || "#121212"};
  font-weight: ${(props) => props.fontWeight || 400};
  text-align: ${(props) => props.textAlign || "left"};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
`;
