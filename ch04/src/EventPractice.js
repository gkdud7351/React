import React, { useState } from "react"

function EventPractice() {
   // 깃 테스트용 주석

   const [username, setUsername] = useState("")
   const [message, setMessage] = useState("")

   const onClick = (e) => {
      alert("첫번째 입력값: " + username + ", 두번째 입력값 : " + message)
      setUsername("")
      setMessage("")
   }

   const onChangeUsername = (e) => setUsername(e.target.value)
   const onChangeMessage = (e) => setMessage(e.target.value)

   const onKeyDown = (e) => {
      console.log(e.key) // 누른 키의 이름 출력

      // 엔터키를 눌렀을 때
      if (e.key === "Enter") {
         onClick()
      }
   }

   return (
      <div>
         <h1>이벤트 연습</h1>
         <input type="text" name="username" placeholder="아무거나 입력" value={username} onChange={onChangeUsername}></input>
         <input type="text" name="message" placeholder="아무거나 입력" value={message} onChange={onChangeMessage} onKeyDown={onKeyDown}></input>
         <button onClick={onClick}>확인</button>
      </div>
   )
}

export default EventPractice
