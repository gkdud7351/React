import PropTypes from "prop-types"

const MyComponent = (props) => {
   // props는 json객체 형태로 전달 받는다
   console.log(props)

   const { name, job, forNumber, children } = props
   return (
      <div>
         <div>
            안녕하세요 제 이름은 {name}입니다. 제 직업은 {job}입니다. 전달 받은 숫자는 {forNumber}입니다.{" "}
         </div>
         <div>children 값은 {children}</div>
      </div>
   )
}

// 디폴트 props 값 지정
MyComponent.defaultProps = {
   name: "기본이름",
   job: "기본직업",
}

MyComponent.propTypes = {
   name: PropTypes.string,
   forNumber: PropTypes.number.isRequired,
}

export default MyComponent
