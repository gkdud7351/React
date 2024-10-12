import React, { useState } from "react"

function EventPractice2() {
   //input 창이 여러개인 경우는 state를 한꺼번에 관리해야 한다 -> json객체로 관리
   const [form, setForm] = useState({
      username: "",
      message: "",
   })

   // 비구조화 할당을 통해 form state 안의 값을 할당
   const { username, message } = form // username:'', message:''

   // 사용자가 입력한 값을 가져와서 state값을 바꿔준다
   const onChange = (e) => {
      const nextForm = {
         ...form, // 기존 form 내용을 복사한 뒤
         [e.target.name]: e.target.value, // 덮어쓰기가 일어남
      }

      setForm(nextForm) // 덮어씌운 값으로 상태변환 시킴
   }

   const onClick = (e) => {
      alert("첫번째 입력값: " + username + ", 두번째 입력값 : " + message)

      setForm({ username: "" })
      setForm({ message: "" })
   }

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
         <input type="text" name="username" placeholder="아무거나 입력" value={username} onChange={onChange}></input>
         <input type="text" name="message" placeholder="아무거나 입력" value={message} onChange={onChange} onKeyDown={onKeyDown}></input>
         <button onClick={onClick}>확인</button>
      </div>
   )

   // 깃 테스트용 주석
}

export default EventPractice2
