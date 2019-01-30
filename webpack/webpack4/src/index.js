import { join } from 'lodash';

const createDOMEl = () => {
  let dom = document.createElement('div');
  dom.innerHTML = join(['Hello', ' ', 'Webpack 4!'], '');
  return dom;
}

document.body.appendChild(createDOMEl());