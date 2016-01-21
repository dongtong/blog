riot.tag2('helloworld', '<h3>Hello <span class="greet-name">{opts.name}</span>, Welcome!</h3> <input name="greetName"> <button onclick="{updateName}">Update</button>', '.greet-name { color: red; }', '', function(opts) {
    this.updateName = function() {
    	console.log(this.greetName.value)
      opts.name = this.greetName.value;
    }.bind(this)
}, '{ }');