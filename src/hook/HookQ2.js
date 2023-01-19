import { useRef, useState } from "react";


const HookQ2 = () => {

    /*
    실습(할일목록 만들기)
    1. state는 {todo: '', list:[]}로 관리하세요
    2. 할일 목록을 작성하고 클릭시, list에 인풋에 입력값을 추가하고 map을 통해서 화면을 그린다.
    3. 등록된 이후에 는 ref를 활용해서 input태그에 포커싱을 준다.
    */

    const inputTag = useRef(null);
    const[list, setList] = useState({todo: '', list:[]});

    //인풋태그에 할일 입력시 list.todo에 체인지 이벤트로 업데이트
    const handleChange = (e) => {
        setList({...list, [e.target.name] : e.target.value});
    }

    const todoList = list.list.map((item,index)=><li key={index}>{index+1}. {item}</li>)
    const handleClick = () => {
        // 직접적인 접근을 피하기 위해 list.list.push(list.todo)를 사용했다가 변경해주었다.
        const newList = list.list;
        newList.push(list.todo);
        // const newList = list.list.concat(list.todo); //강사님

        setList({todo: '', list: newList});
        inputTag.current.focus();
    }

    return(
        <div>
            <h3>ref로 할일목록 만들기</h3>
            <input type="text" name="todo" placeholder="할일을 적어" onChange={handleChange} ref={inputTag} value={list.todo}/>
            <button type="button" onClick={handleClick}>등록하기</button>

            <ul>
                {todoList}
            </ul>
        </div>
    )
}

export default HookQ2;