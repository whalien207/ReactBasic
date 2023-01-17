/*
이미지를 가져오는 방법
1. 외부서버에서 경로를 참조받음 (가장일반적인 방법)
    <img src="https://raw.githubusercontent.com/yopy0817/data_example/master/img/img1.png" alt="" width="100"/>
2. src 폴더 밑에 img 파일 참조 가능하다 (선호되지는 않는다)
    import img1 from './../img/img1.png'
    <img src={img1} alt=""></img>
3. public폴더 밑에 넣는경우 이미지를 바로 참조 가능하다.
    - public폴더가 필요한 정적파일들을 넣어주는 폴더이다.
    <img src="/img/img1.png" alt=""></img>
*/

import { useState } from "react";

const IterationComponentQ = () => {

    const arr = [
        {src : '/img/img1.png', title : '아이폰10', price: 1000},
        {src : '/img/img2.png', title : '아이폰11', price: 2000},
        {src : '/img/img3.png', title : '아이폰12', price: 3000},
        {src : '/img/img4.png', title : '아이폰13', price: 4000},
    ]

    const [img, setImg] = useState('');
    const handleClick = (link) => {
        const newImg = <img src={link} alt=""/>
        setImg(newImg);
    }

    const content = arr.map((item, index) => 
        <div key={index}>
            <img src={item.src} alt={item.title} onClick={ () => handleClick(item.src)}/>
            <p>상품: {item.title}</p>
            <p>가격: {item.price}</p>
        </div>
    );

    return(
        <>
            <h3>이미지 데이터 반복하기</h3>
            {/* <img src="https://raw.githubusercontent.com/yopy0817/data_example/master/img/img1.png" alt="" width="100"/> */}

            {/* 반복할 요소의 모형 */}
            {img}
            <div style={{display:"flex", justifyContent: "space-around"}}>
                {content}
            </div>
        </>
    )
}

export default IterationComponentQ;