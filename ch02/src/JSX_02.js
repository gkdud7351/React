function App() {
   // 2. {} 중괄호를 이용시 자바스크립트 표현식 사용
   // if문 대신 삼항연산자 사용
   const name = "리액트"

   return (
      <>
         <h1>{name} 안녕!</h1>
         {name === "리액트" ? <h1>리액트입니다</h1> : <h2>아닙니다.</h2>}
      </>
   )
}

export default App
