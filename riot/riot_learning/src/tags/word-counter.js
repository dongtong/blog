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