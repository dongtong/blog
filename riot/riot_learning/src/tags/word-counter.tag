<word-counter>
  <h3>{ title }</h3>
  
  <input id="input" onkeyup={ increase } />
  <button id="remove" onclick= { decrease }>删除</button>
  <div>数量: { count }</div>
  
  <script type="es6">
    title = '文字计数器(不支持中文 :()';
    count = 0;
    
    increase = (e) => {
      count++;
    }
    
    decrease = (e) => {
      if (count > 0) {
        input.value = getDecreasedContent(input.value);
        count--;
      }
    }
    
    getDecreasedContent = (content) => {
      return content.substr(0, content.length - 1);
    }
    
  </script>
</word-counter>