import { useEffect, useRef, useState } from "react";


const HookQ = () => {

    /*
    1. 컴포넌트가 마운트된 이후 한번만 id태그에 포커스를 준다.
    2. id와 pw는 state로 관리한다. 
        - 로그인 버튼 클릭시 공백이라면 공백인 태그에 포커스를 준다.
        - 로그인 버튼 클릭시 공백이 아니라면 경고창으로 id와 pw를 출력

    */

    //1. id태그에 포커스 주기 (컴포넌트가 마운트 된 이후 한번만)
    const idTag = useRef(null);
    useEffect(() => {
        idTag.current.focus();
    }, []);

    //2. pw태그에도 useRef를 걸고 ref로 태그 만들어주기
    const pwTag = useRef(null);

    //id와 pw를 state로 관리한다. input태그에 값이 입력 될 때마다 state 값 변경
    const [info, setInfo] = useState({ id: '', pw: '' });
    const handleChange = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value })
    }

    //로그인 버튼 클릭시 id > pw 순으로 확인하여 포커스 주고 둘다 빈값이 아니라면 alert 띄워주기
    const handleClick = () => {

        //나
        // if(info.id === ''){
        //     idTag.current.focus();
        // }else if(info.pw === ''){
        //     pwTag.current.focus();
        // }else{
        //     alert(`ID : ${info.id} & PW : ${info.pw}`);
        //     setInfo({id: '', pw: ''});
        // }

        //강사님
        if (idTag.current.value === '') {
            idTag.current.focus();
        } else if (pwTag.current.value === '') {
            pwTag.current.focus();
        } else {
            alert(`ID : ${info.id} & PW : ${info.pw}`);
        }
    }

    return (
        <div>
            <h3>훅 실습</h3>
            <input type="id" name="id" placeholder="아이디" ref={idTag} onChange={handleChange} value={info.id} />
            <input type="password" name="pw" placeholder="비밀번호" ref={pwTag} onChange={handleChange} value={info.pw} />
            <button type="button" onClick={handleClick}>로그인</button>
        </div>
    )
}

export default HookQ;