import { useState } from "react";

const EventComponentQ2 = () => {

    const[data, setData] = useState({data:'', result:''});

    const handleChange = (e) => {
        const copy = {...data, [e.target.name] : e.target.value}; //데이터 복사
        setData(copy);

        //강사님 ver
        //data는 사용자의 입력값으로 result는 유지
        // setData({data:e.target.value, result: data.result});
    }

    const handleClick = () => {
        setData({data:'', result: data.data});
    }

    return(
        <>
            <hr/>
            <h5>인풋데이터 핸들링(실습)</h5>
            <p>클릭시 데이터는 공백으로 결과는 인풋이 입력한 값으로 처리</p>
            <p>힌트는? 아마도 state는 두개가 필요할듯?</p>

            <input type="text" name="data" onChange={handleChange} value={data.data}/>
            <button type="button" onClick={handleClick}>추가하기</button>

            <h5>결과 : {data.result}</h5>
        </>
    )
}

export default EventComponentQ2;