// let's go!
import React from 'react';
import { render } from 'react-dom';

import App from './components/App';
import PhotoGrid from './components/PhotoGrid';

render(<App><PhotoGrid></PhotoGrid></App>, document.getElementById('root'));