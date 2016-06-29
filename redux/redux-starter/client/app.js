// let's go!
import React from 'react';
import { render } from 'react-dom';

import App from './components/App';
import PhotoGrid from './components/PhotoGrid';
import Detail from './components/Detail';

// import react-router deps
import { Router, Route, IndexRoute, browserHistory} from 'react-router';

// Integrate store with react-router
import { Provider } from 'react-redux';
import store, { history } from './store';

// JSX
const router = (
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={PhotoGrid}></IndexRoute>
				<Route path="/photos/:photoId" component={Detail}></Route>
			</Route>
		</Router>
	</Provider>
)

render(router, document.getElementById('root'));