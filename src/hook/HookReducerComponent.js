
const myReducer = (state, action) => {

    console.log(state);
    console.log(action);

    //action은 객체
    if (action.type === 'increase') {
        state = { value: state.value + 1 };
    } else if (action.type === 'decrease') {
        state = { value: state.value - 1 };
    } else if (action.type === 'reset') {
        state = { value: 0 };
    }
    return state;
}

const nameReducer = (state, action) => {
    console.log(action.name);
    state = {...state, [action.name] : action.value};
    return state;
}

//기본 디포트 모형
export {myReducer, nameReducer};