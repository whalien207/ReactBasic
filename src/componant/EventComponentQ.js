import { useState } from "react";


const EventComponentQ = () => {

    const [menu, setMenu] = useState('선택하세요');
    const handelOption = (e) => {
        setMenu(e.target.value);
    }

    return(
        <>
            <hr/>
            <h3>셀렉트 태그 핸들링(실습)</h3>
            <p>셀렉트 태그가 체인지 될 떄 선택한 결과를 아래에 출력</p>

            <select onChange={handelOption}>
                <option>선택하세요</option>
                <option>햄버거</option>
                <option>피자</option>
                <option>치킨</option>
                <option>피막치</option>
                <option>치맥</option>
                <option>부리또</option>
            </select>

            <h5>선택한 결과: {menu}</h5>
        </>
    )
}

export default EventComponentQ;