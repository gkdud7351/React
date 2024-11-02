import styled from "styled-components";

//styled.태그명`css스타일 작성`
const StyledButton = styled.button`
  color: white;
  background-color: green;
`;

//감싸기 기능으로 새로운 버튼 만들기
const LasrgeButton = styled(StyledButton)`
  font-size: 50px;
`;

function ReactButton3() {
  return (
    <div>
      <StyledButton>버튼</StyledButton>
      <LasrgeButton>버튼</LasrgeButton>
    </div>
  );
}

export default ReactButton3;
