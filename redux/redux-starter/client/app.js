// let's go!
import React from 'react';
import { render } from 'react-dom';

import App from './components/App';
import PhotoGrid from './components/PhotoGrid';
import Detail from './components/Detail';

// import react-router deps
import { Router, Route, IndexRoute, browserHistory} from 'react-router';

// JSX
const router = (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={PhotoGrid}></IndexRoute>
			<Route path="/photos/:photoId" component={Detail}></Route>
		</Route>
	</Router>
)

render(router, document.getElementById('root'));