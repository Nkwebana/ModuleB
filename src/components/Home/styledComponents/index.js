import styled from "styled-components";

const StyledHome = styled.View`
  background-color: ${({ backgroundColor }) => backgroundColor || "brown"};
  padding: 10px;
`;

const StyledTitle = styled.Text`
  font-size: 20px;
  color: white;
`;

export { StyledHome, StyledTitle };
