// a reducer takes two parameters
// 1. action info
// 2. copy of current status

function posts(state = [], action) {
    // 不是一个pure function，是一个mutating function
	// state[action.index].likes++;
    // spread
    // let state = {...state};
    // 复制一个对象
    switch(action.type) {
        case 'INCREMENT_LIKES':
            // 返回最新的state
            return [
                ...state.slice(0, action.index),
                {...state[action.index], likes: state[action.index].likes + 1}, // Object.assign({}, object)
                ...state.slice(action.index + 1),
            ]
        default:
            return state;
    }
	return state;
}

export default posts;