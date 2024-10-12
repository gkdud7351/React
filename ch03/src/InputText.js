import React, { useState } from "react"

const InputText = () => {
   const [text, setText] = useState("")
   return (
      <div>
         <input
            type="text"
            value={text}
            onChange={(e) => {
               console.log(e)
               // 입력받은 값을 이용해 text state 값 변경
               setText(e.target.value)
            }}
         ></input>
         <p>입력한 값:{text}</p>
      </div>
   )
}

export default InputText
