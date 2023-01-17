import { Fragment } from "react";
import IterationComponent from "./componant/IterationComponent";
import IterationComponent2 from "./componant/IterationComponent2";
import IterationComponentQ from "./componant/IterationComponentQ";
import IterationComponentQ2 from "./componant/IterationComponentQ2";


const App = () => {

    /*
    p 180
    컴포넌트 반복하기
    map(콜백(item, index, arr))
    */
    return(
        <Fragment>
            <IterationComponent/>
            <hr/>
            <IterationComponent2/>

            {/* 실습 */}
            <hr/>
            <IterationComponentQ/>
            <hr/>
            <IterationComponentQ2/>
        </Fragment>
    )
}

export default App;