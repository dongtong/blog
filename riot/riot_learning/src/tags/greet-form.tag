<greet-form>
  
  <form onsubmit={greet}>
    <input type="text" name="who" />
    <button>问候</button>
  </form>
  
  <h4>Hey, 你好: {this.somebody}</h4>
  
  <hello-world show={this.somebody} who={this.somebody}></hello-world>
  
  <script>
    /*
    *this.greet = function () {
    *  this.somebody = this.who.value;
    *}
    */
    
    greet () {
      this.somebody = this.who.value;
    }
  </script>
  
</greet-form>

