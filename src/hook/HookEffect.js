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
    useEffect(() => {
        console.log('처음만 실행됨');
    },[]);

    //usetEffect(함수, [state]) - 특정값이 랜더링 될때만 실행된다.
    /*
    useEffect(() => {
        console.log('age와 name이 변경될 떄 실행');
    },[age, name]);
    */

    useEffect(() => {
        console.log('name이 변경될때 render된다')
        //컴포넌트가 unmount될때 실행된다.

        return () => {
            console.log(`unmount된다`);//랜더링이 그려지면, 기존화면은 지워진다.
            console.log(`update전 값: ${name}`);
        }
    },[name]);
    //useEffect는 여러개여도 된다.

    return(
        <>
            이름:<input type="text" onChange={handleName}/><br/>
            나이:<input type="number" onChange={handleAge}/><br/>

            이름:{name}, 나이:{age}
        </>
    )
}

export default HookEffect;