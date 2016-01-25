/****************************************************************************/
// var div = document.createElement('div');
// div.innerHTML = 'hello virtual-dom';
// document.body.appendChild(div);


/*****************************************************************************/
// create element and append it by virtual-dom
// var html = require('virtual-dom/h');
// var createElement = require('virtual-dom/create-element');

// var tree = html('div', 'hello virtual-dom');
// var rootNode = createElement(tree);
// document.body.appendChild(rootNode);


/****************************************************************************/
//apply pathes

var html = require('virtual-dom/h');
var createElement = require('virtual-dom/create-element');
var diff = require('virtual-dom/diff');
var patch = require('virtual-dom/patch');
var delegator = require('dom-delegator');

var data = ['JavaScript', 'React', 'Riot'];
//initialize dom-delegator
delegator(); 

//render dom by virtual-dom
function render(data) {
	var lis = data.map(function(item) {
		return html('li', item);
	});

	lis.push(html('li', [
		html('button', {
			style: {
				color: 'red'
			},
			onclick: function(e) { //use delegator => 'ev-click:'
				data.push('new item');
				updateDOM();
			}
		}, 'Add Item')
	]))

	return html('ul', lis);
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

/****************************************************************************/
// common implementation
var button = document.createElement('button');
button.innerHTML = "Add";
document.body.appendChild(button);
button.onclick = function(){
	var ul = document.querySelector('ul');
	var li = document.createElement('li');
	li.innerHTML = 'Common Added';
	ul.appendChild(li);
};