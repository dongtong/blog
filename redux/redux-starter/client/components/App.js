import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import Home from './Home';

// data
function mayStateToProps(state) {
	return {
		posts: state.posts,
		comments: state.comments
	};
}

// function
function mayDispatchToProps(dispatch) {
	return bindActionCreators(actions, dispatch);
}

// inject data and functions to Home component
const App = connect(mayStateToProps, mayDispatchToProps)(Home);

export default App;
