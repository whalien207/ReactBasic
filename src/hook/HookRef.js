import { useRef, useState } from "react";


const HookRef = () => {
    
    //사용자 입력값 data, 화면에 출력값 result
    const [form, setForm] = useState({data:'', result:''});

    //인풋태그에 값입력시 체인지 이벤트
    const handleChange = (e) => {
        setForm({...form, ["data"]: e.target.value});
    }

    //버튼 클릭시 등록 이벤트
    const handleClick = () => {
        setForm({data: '', result :form.data});

        //
        // console.log(inputTag);
        // console.log(inputTag.current); //tag그 자체
        // console.log(inputTag.current.value); //tag안의 value

        inputTag.current.focus();

    }

    //특정 태그에 이름달기 useRef()
    //반환된 이름을 사용할 태그에 ref속성에 넣는다
    //1. useRef()를 사용하여 하나의 변수로 이름을 지정해주고 
    //2. 만든useRef태그를 태그에 ref={}안에 넣어주면 된다.
    const inputTag = useRef();
    // console.log(inputTag);

    return(
        <>
            내용: <input type="text" onChange={handleChange} value={form.data} ref={inputTag}/>
            <button type="button" onClick={handleClick}>등록하기</button>
            <br/>
            결과: {form.result} 
        </>
    )
}

export default HookRef;