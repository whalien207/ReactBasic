import { Fragment } from "react";
import HookEffect from "./hook/HookEffect";

const App = () => {
    /*
    p.223
    1. 필수 훅
    useState()
    컴포넌트에서 상태값을 제어하는 가장 기본이 되는 hook

    useEffect()
    컴포넌트의 라이프사이클(생명주기)를 다룬다.
    mount, mount이후, unmount이전, state변경시에 특정 작업을 수행할 수 있다.
    */
    return(
        <>
            <HookEffect/>
        </>
    )
}

export default App;