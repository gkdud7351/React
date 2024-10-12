import React, { useState } from "react"

const Say = () => {
   // state란 컴포넌트 내부에서 바뀌는 값
   // message : state를 저장하는 변수
   // setMessage : state의 값을 바꾸는 함수
   const [message, setMessage] = useState("초기값")
   const [color, setColor] = useState("red")

   console.log(message)

   // 입장버튼 눌렀을 때 실행하는 함수
   const onClickEnter = () => {
      //state 값 변경
      setMessage("안녕하세요")
   }

   // 퇴장버튼 눌렀을 때 실행하는 함수
   const onClickLeave = () => {
      //state 값 변경
      setMessage("안녕히가세요")
   }

   return (
      <div>
         <button onClick={onClickEnter}>입장</button>
         <button onClick={onClickLeave}>퇴장</button>
         <h1 style={{ color }}>{message}</h1>
         {/* 이벤트 함수를 분리하지 않고 내부 선언하는 방법 */}
         <button
            onClick={() => {
               setColor("red")
            }}
         >
            빨강
         </button>
         <button
            onClick={() => {
               setColor("green")
            }}
         >
            초록
         </button>
         <button
            onClick={() => {
               setColor("blue")
            }}
         >
            파랑
         </button>
      </div>
   )
}

export default Say
