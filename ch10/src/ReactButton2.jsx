import styled from "styled-components";

//styled.태그명`css스타일 작성`
const StyledButton = styled.button`
  color: white;
  background-color: green;
`;

function ReactButton2() {
  return <StyledButton>버튼</StyledButton>;
}

export default ReactButton2;
