require(['./foo.js'], function(content) {
  document.body.appendChild(content[0]);
})
