// a reducer takes two parameters
// 1. action info
// 2. copy of current status

function posts(state = [], action) {
	console.log(state, action);
	return state;
}

export default posts;