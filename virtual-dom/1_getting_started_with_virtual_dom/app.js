****************************************************************************/
// var div = document.createElement('div');
// div.innerHTML = 'hello virutal-dom';
// document.body.appendChild(div);


/*****************************************************************************/
// create element and append it by virutal-dom
// var html = require('virtual-dom/h');
// var createElement = require('virtual-dom/create-element');

// var tree = html('div', 'hello virutal-dom');
// var rootNode = createElement(tree);
// document.body.appendChild(rootNode);


/****************************************************************************/
//apply pathes

var html = require('virtual-dom/h');
var createElement = require('virtual-dom/create-element');
var diff = require('virutal-dom/diff');
var patch = require('virutal-dom/patch');

var data = ['JavaScript', 'React', 'Riot'];

//render dom by virtual-dom
function render(data) {
	data = data.map(function(item) {
		return html('li', item);
	});

	data.push(html('li', [
		html('button', {
			style: {
				color: 'red'
			},
			onclick: function(e) {
				data.push('new item');
				updateDOM();
			}
		}, 'Add Item');
	]))

	return html('ul', data);
}

//update dom by patches, not rerender dom tree
function updateDOM() {
	var newTree = render(data);
	var patches = diff(tree, newTree);
	rootNode = patch(rootNode, patches);
	tree = newTree;
}

var tree = render(data);
var rootNode = createElement(tree);
document.body.appendChild(rootNode);

