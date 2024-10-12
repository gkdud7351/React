function App() {
   // 4. ||연산
   // A || B -> A가 true면 A 출력, A가 false면 B 출력

   const name = undefined // false
   return <div>{name || "리액트"}</div>
}

export default App
