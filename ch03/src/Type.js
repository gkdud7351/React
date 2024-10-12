const Type = (props) => {
   console.log(props)
   const { str, num, bool, arr, json } = props

   return (
      <div>
         <p>StringProps:{str}</p>
         <p>NumberProps:{num}</p>
         {/* {bool,array,json 타입은 문자열로 변경해서 화면에 출력가능} */}
         <p>BooleanProps:{bool.toString()}</p>
         <p>ArrayProps:{arr.toString()}</p>
         <p>JsonProps:{JSON.stringify(json)}</p>
         {/* <p>FuncProps:{func}</p> */}
      </div>
   )
}

export default Type
