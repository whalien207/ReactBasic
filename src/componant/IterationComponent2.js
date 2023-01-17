import { useState } from "react";


const IterationComponent2 = () => {

    //1. 반복할 데이터 (state로 관리)
    const arr = [
        {id: 1, topic: 'hello'},
        {id: 2, topic: 'bye'},
        {id: 3, topic: 'see you'},
    ];

    const [list, setList] = useState(arr);

    //2. map함수를 이용하여 li태그로 생성
    const newList = list.map((item) => 
        <li key={item.id} onDoubleClick={ () => {
            //onDoubleClick = {handleRemove} 로 한다면 호이스팅 실패로 호출이 안된다.
            //그래서 db클릭시 안에 익명함수를 만들고 안에서 함수를 호출한 것이다.
            handleRemove(item.id) //함수를 호출?
        }}> 
            {item.topic} 
        </li>
    );

    //3. 인풋데이터 관리 - 인풋태그에 입력된 값을 onchange이벤트를 통해 저장
    const [data, setData] = useState('');
    const handleChange = (e) => {
        setData(e.target.value);
    }

    // 4. 추가하기 버튼 클릭시 input의 값을 list의 마지막에 추가
    const handleClick = (e) => {
        let obj = {id: list[list.length-1].id + 1 , topic: data};

        //바로 list data에 작업할 수 없고 setList를 사용해야 하므로...
        //기존의 list에 obj를 추가한 새로운 list를 만들어 setList로 아예 덮어씌워주어야 한다.
        let newList = list.concat(obj);
        setList(newList);

        //input태그 초기화
        setData('');
    }

    //5. 삭제기능
    //화살표 함수 function handleRemove = () => {}는 
    //익명함수를 대체하기 떄문에 호이스팅이 불가능하다. 따라서 지금은 사용할 수 없다.
    // function handleRemove(){}

    // 익명함수로 사용하고 싶다면 이벤트 안에서 함수를 호출로 연결하여 익명함수를 사용할 수 있다.
    //onClick = { ()=> 익명함수() }
    const handleRemove = (id) => {
        // console.log(id);

        //filter 사용해 줄 수 있다. - 콜백의 리턴에 true인 값을 가지고 새로운 배열 생성
        //filter는 map과 사용방법은 같다. but, 조건에 true인 값들만 가지고 false인 값은 버린다.
        // [1,2,3,4,5].filter((item) => item != 3)
        //위와 같다면 item이 3이 아닌 애들만 true로 3을 제외한 애들만 가지고 배열이 재구성된다.

        let newList = list.filter( item => item.id !== id );
        setList(newList);
    }

    return(
        <>
            <h3>목록 추가하기</h3>
            <input type="text" onChange={handleChange} value={data}/>
            <button type="button" onClick={handleClick}>추가하기</button>
            <ul>
                {newList}
            </ul>
        </>
    )
}

export default IterationComponent2;