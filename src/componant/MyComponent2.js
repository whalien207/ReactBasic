import { Fragment } from "react";

const MyComponent2 = ({name}) => {

    return (
        // </Fragment> 사용시 이름 없는 태그로 사용가능
        <>
            <div>나의 두번째 컴포넌트</div>
            프롭스값: {name}
        </>
    )
}

export default MyComponent2;