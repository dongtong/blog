/*
 * action触发后，所有的reducers都会观察到
 * 符合条件的reducer会返回新的状态
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';

const rootReducer = combineReducers({
	posts,
	comments,
	routing: routerReducer
});

export default rootReducer;