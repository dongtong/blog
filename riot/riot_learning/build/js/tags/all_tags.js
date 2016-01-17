(function(tagger) {
  if (typeof define === 'function' && define.amd) {
    define(['riot'], function(riot) { tagger(riot); });
  } else if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    tagger(require('riot'));
  } else {
    tagger(window.riot);
  }
})(function(riot) {
riot.tag2('greet-form', '<form onsubmit="{greet}"><input type="text" name="who"><button>问候</button></form><h4>Hey, 你好: {this.somebody}</h4><hello-world show="{this.somebody}" who="{this.somebody}"></hello-world>', '', '', function(opts) {


    this.greet = function() {
      this.somebody = this.who.value;
    }.bind(this)
}, '{ }');



});
(function(tagger) {
  if (typeof define === 'function' && define.amd) {
    define(['riot'], function(riot) { tagger(riot); });
  } else if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    tagger(require('riot'));
  } else {
    tagger(window.riot);
  }
})(function(riot) {
riot.tag2('hello-world', '<h3>Hello {opts.who}</h3>', '', '', function(opts) {
}, '{ }');



});
(function(tagger) {
  if (typeof define === 'function' && define.amd) {
    define(['riot'], function(riot) { tagger(riot); });
  } else if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    tagger(require('riot'));
  } else {
    tagger(window.riot);
  }
})(function(riot) {
riot.tag2('word-counter', '<h3>{title}</h3><input id="input" onkeyup="{increase}"><button id="remove" onclick="{decrease}">删除</button><div>数量: {count}</div>', '', '', function(opts) {
title = '文字计数器(不支持中文 :()';
count = 0;

increase = function (e) {
  count++;
};

decrease = function (e) {
  if (count > 0) {
    input.value = getDecreasedContent(input.value);
    count--;
  }
};

getDecreasedContent = function (content) {
  return content.substr(0, content.length - 1);
};
}, '{ }');

});