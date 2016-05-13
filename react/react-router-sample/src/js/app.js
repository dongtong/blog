import React from 'react';
import ReactDOM from 'react-dom';
//import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';

import Layout from './components/layout';
import About from './components/about';
import Contact from './components/contact';

const app = document.getElementById('container');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Layout}>
			<Route path="about(/:who)" component={About}></Route>
			<Route path="contact" component={Contact}></Route>
		</Route>
	</Router>
,  app);