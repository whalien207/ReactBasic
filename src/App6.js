import { Fragment, useState } from "react";
import HookEffect from "./hook/HookEffect";
import HookQ from "./hook/HookQ";
import HookQ2 from "./hook/HookQ2";
import HookReducer from "./hook/HookReducer";
import HookReducer2 from "./hook/HookReducer2";
import HookRef from "./hook/HookRef";

const App = () => {
    /*
    p.223
    1. 필수 훅
    useState()
    컴포넌트에서 상태값을 제어하는 가장 기본이 되는 hook

    useEffect()
    컴포넌트의 라이프사이클(생명주기)를 다룬다.
    mount, mount이후, unmount이전, state변경시에 특정 작업을 수행할 수 있다.

    useRef()
    태그의 이름달기

    2. 부가적인 훅
    useReducer()
    useState의 사용을 외부에서 사용할 수 있게 해주는 훅 (state의 변경을 외부에서 제어할 수 있다.)
    const [현재값, 리듀서를 업데이트할 수 있는 함수] = useReducer(외부에서 사용할 리듀서함수, 리듀서의 초기값)

    */

    const[visible, setVisible] = useState(true);
    const handleClick = () => {
        //visible이 들고있는값의 반대값으로 넣어서
        //t > f > t > f 이런식으로 바뀌도록 해준다.
        setVisible(!visible);
        console.log(visible);
    }

    return(
        <>
            {/* effterHook */}
            <button onClick={handleClick}>{visible?"숨기기":"보이기"}</button>
            <br/>
            {visible ? <HookEffect/> : null}

            <hr/>
            {/* HookRef */}
            <HookRef/>

            {/* 실습 */}
            <hr/>
            <HookQ/>
            <HookQ2/>

            {/* 리듀서 훅 : 알아두면 언젠가 도움이 되지 않을까 생각함 ㅎㅎ */}
            <hr/>
            <HookReducer/>

            <hr/>
            <HookReducer2/>
        </>
    )
}

export default App;