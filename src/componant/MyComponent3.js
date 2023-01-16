import { Component } from "react";

class MyComponent3 extends Component{

    /*
    state는 생성자 안에서 초기화한다.
    state의 접근은 this.state를 이용해서 접근한다.

    클래스형에서는 생성자를 작성할 때는 반드시 props를 받고,
    super를 통해서 부모컴포넌트에 연결해주어야 한다.
    */
   
    constructor(props){
        super(props);
        // this.state는 반드시 객체모형으로 선언해주어야 한다. {}
        // 생성될때 state 초기화
        this.state = {
            a : 1,
            b : props.name //부모로 부터 전달받은 name
        }
    }

    //클래스형 컴포넌트 render함수 안에서 return 문을 작성
    render(){

        let {name} = this.props;//props
        console.log(name);

        return (
            <>
            <hr/>
            <div>나의 클래스형 컴포넌트</div>
            <h5>state value : {this.state.a}</h5>
            <h5>state value : {this.state.b}</h5>
            </>
        )
    }
}

export default MyComponent3;