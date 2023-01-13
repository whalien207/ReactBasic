import { Fragment } from "react";
import propTypes from 'prop-types';

/*
p. 87p
컴포넌트 선언방법은 크게 2가지 (함수형, 클래스)
컴포넌트는 여러개 일 수 있습니다.

모듈 내보내기 export default
모듈 가져오기 import ~~ from 경로

p. 96(프롭스)
1. 상위 컴포넌트에서 하위 컴포넌트로 전달하는 매개변수
2. 객체 형태로 전달되기 때문에 {}로 값을 받는다.
3. props는 읽기전용이다. (값은 부모에서 바꿔서 전달해야한다.)
*/

// const MyComponent = (props) => { //3. props로 받지말고 바로 구조분해해서 받기
const MyComponent = ({name, age, email, addr}) => {

    //1 - 매개변수로 받은 것을 각 변수에 넣어 사용
    // console.log(props);
    // const a = props.name;
    // const b = props.age;
    // const c = props.email;

    //2 - 매개변수로 받은것을 구조분해해서 사용
    // const{name, age, email} = props;

    return (
        <Fragment>
            <div>나의 첫번째 컴포넌트</div>
            <div>props값: {name}</div>
            <div>props값: {age}</div>
            <div>props값: {email}</div>
            <div>default props값: {addr}</div>
        </Fragment>
    )
}

/* props의 기본값 지정하기 컴포넌트명 defaultProps = {} */

//name이 있다면 그대로 사용 , 없다면 정해준 이름없음으로 사용된다.
MyComponent.defaultProps = {
    name : "이름없음",
    age : 0,
    // email: "지정안됨",
    addr : "서울시" // addr은 전달되지 않지만 기본값으로 지정해줄 수 있다.
}

/* props의 타입검증 propTypes = {} */
MyComponent.propTypes  = {
    name : propTypes.string,
    age : propTypes.number,
    email : propTypes.string.isRequired //문자열타입.반드시 전달
}

export default MyComponent;