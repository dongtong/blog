(function(tagger) {
  if (typeof define === 'function' && define.amd) {
    define(['riot'], function(riot) { tagger(riot); });
  } else if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    tagger(require('riot'));
  } else {
    tagger(window.riot);
  }
})(function(riot) {
riot.tag2('greet-form', '<form onsubmit="greet"><input type="text" name="who"><button>问候</button></form><h4>你好: {this.somebody}</h4>', '', '', function(opts) {
    this.greet = function () {
      this.somebody = this.who.value;
    }
}, '{ }');

});