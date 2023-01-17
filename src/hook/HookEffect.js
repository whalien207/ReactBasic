import { useEffect, useState } from "react";


const HookEffect = () => {

    const[name, setName] = useState('');
    const[age, setAge] = useState('');

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleAge = (e) => {
        setAge(e.target.value);
    }

    //usetEffect(함수)
    /*
    useEffect(() => {
        console.log(`랜더링 완료. state값${name}`);
    });
    */

    //usetEffect(함수, []) - 화면이 mount된 이후로 딱 한번 실행됨
    //화면이 첫번째 mount에서만 실행된다.
    /*
    useEffect(() => {
        console.log('처음만 실행됨');
    },[]);
    */

    //usetEffect(함수, [state]) - 특정값이 랜더링 될때만 실행된다.
    useEffect(() => {
        console.log('age와 name이 변경될 떄 실행');
    },[age, name]);

    return(
        <>
            이름:<input type="text" onChange={handleName}/><br/>
            나이:<input type="number" onChange={handleAge}/><br/>

            이름:{name}, 나이:{age}
        </>
    )
}

export default HookEffect;