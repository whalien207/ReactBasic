import { useState } from "react";

const StateComponentQ = () => {

    // useState되는 부분을 let으로 하면 setCount ( count++ )이 가능하지만,
    // 그렇게된다면 count변수를 바로 수정한거나 다름 없기때문에 좋지 않다.
    // 따라서 변수를 직접적으로 수정할 수 없도록 const타입으로 만들고
    // count + 1을 해주는 값을 setCount를 해준다.
    let plus = () => setCount(count + 1)
    let minus = () => setCount(count - 1)
    let clear = () => setCount(0)
    const [count, setCount] = useState(0);

    return (
        <>
        <hr/>
        <h3>실습</h3>
        <h3>카운트 : {count}</h3>

        <button onClick={plus}>증가</button>
        <button onClick={minus}>감소</button>
        <button onClick={clear}>초기화</button>
        </>
    )
}

export default StateComponentQ;