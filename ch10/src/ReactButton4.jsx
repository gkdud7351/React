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

const ReactButton = (props) => {
  return <button>{props.children}</button>;
};

//리액트 전통 방식으로 만든 버튼에 감싸기 적용
const ReactLargeButton = styled(ReactButton)`
  font-size: 50px;
`;

function ReactButton4() {
  return (
    <div>
      <StyledButton>버튼</StyledButton>
      <LasrgeButton>Large</LasrgeButton>
      <ReactButton>React</ReactButton>
      <ReactLargeButton>React Large</ReactLargeButton>
    </div>
  );
}

export default ReactButton4;
