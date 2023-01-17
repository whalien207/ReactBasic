import { useState } from "react";


const IterationComponentQ2 = () => {

    //1. select 태그틑 컴포넌트반복으로 option태그를 생성한다.
    const select = ['HTML', 'Javascript', 'CSS', 'Java', 'Oracle', 'Mysql'];

    //2. data는 state로 관리하고 화면에 li태그로 반복을 한다.
    const data = [
        { id: 1, type: 'Java', teacher: '이순신' },
        { id: 2, type: 'Java', teacher: '홍길자' },
        { id: 3, type: 'Javascript', teacher: '홍길동' },
        { id: 4, type: 'Oracle', teacher: '이순신' },
        { id: 5, type: 'Mysql', teacher: '이순신' },
        { id: 6, type: 'CSS', teacher: '박찬호' },
        { id: 7, type: 'HTML', teacher: 'coding404' },
    ];

    const options = select.map((item, index) => <option key={index}>{item}</option>);
    
    const[list,setList] = useState(data);
    const newList = list.map(item => <li key={item.id}>{item.type}-{item.teacher}</li>);

    const handleChange = (e) => {
        const selectType = data.filter((item) => item.type === e.target.value);
        setList(selectType);
    }

    //3. 셀렉트 박스가 체인지 되면, 이벤트객체를 활용해서 선택된 값만 필터링해서 보여주면 된다.


    //4. 검색 기능 만들기 - 대소문자 구분하지 않고 teacher나 type에서 포함된 데이터만 필터링하면 된다.
    const[keyword, setKeyword] = useState('');
    const inputSearch = (e) => {
        const input = e.target.value;
        setKeyword(input);
    }

    const handleClick = () => {
        const searchResult = data.filter((item) => 
            (item.type.toUpperCase().indexOf(keyword.toUpperCase()) !== -1) ||
            (item.teacher.toUpperCase().indexOf(keyword.toUpperCase()) !== -1)
        );
        // console.log(searchResult);
        setList(searchResult);
    }

    return (
        <>
            <h3>컴포넌트 반복 실습^*^</h3>
            <div>
                search:<input type="text" onChange={inputSearch}/>
                <button type="button" onClick={handleClick}>검색</button>
            </div>
            과목찾기:
            <select onChange={handleChange}>
                {options}
            </select>
            <ul>
                {newList}
            </ul>
        </>
    )
}

export default IterationComponentQ2;