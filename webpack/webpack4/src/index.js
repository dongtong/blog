import { join } from 'lodash';
import './css/main.css';

const createDOMEl = () => {
  let dom = document.createElement('div');
  dom.innerHTML = join(['Hello', ' ', 'Webpack 4!'], '');
  //dom.className = 'red';
  dom.classList.add('red');
  return dom;
}

document.body.appendChild(createDOMEl());