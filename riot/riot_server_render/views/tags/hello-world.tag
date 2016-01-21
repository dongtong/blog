<helloWorld>
  <style>
    .greet-name {
    	color: red;
    }
  </style>

  <h3>Hello <span class="greet-name">{opts.name}</span>, Welcome!</h3>

  <input name="greetName" /> 
  <button onclick={updateName}>Update</button>
  
  <script>
    updateName () {
    	console.log(this.greetName.value)
      opts.name = this.greetName.value;
    }
  </script>
</helloWorld>