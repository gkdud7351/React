import "./App.css"

function App() {
   // 7. 닫는 태그가 무조건 있어야 한다.
   const name = "리액트"
   return (
      <>
         <div className="react">{name}</div>
         <input type="text"></input>
         <input type="text" />
         {/* 사용할 수 X */}
         {/*<input type="text">*/}
      </>
   )
}

export default App
