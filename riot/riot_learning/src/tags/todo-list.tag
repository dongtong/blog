<todo-list>
  <input type="text" id="newTodo" placeholder="请输入待办事项(回车添加)..." onkeyup= {add} />
  
  <ul>
    <li each={todos}>
      <todo></todo>
    </li>
  <ul>
  
  <script>
 
    this.todos = opts.todos;   
    
    add(e) {
      if(e.which == 13) { //回车
        this.todos.push({
          id: opts.todos.length + 1,
          content: newTodo.value,
          completed: false
        });
        
        this.update();
        
        newTodo.value = '';
      }
    }.bind(this);
    
    
    complete(e) {
      e.item.completed = true;
      this.update();
    }.bind(this)
    
  </script>
</todo-list>

<todo>
  <p>
    {content} - <span class={red: completed, green: !completed}>{completed ? '完成' : '待办'}</span>
    <button onclick={ this.parent.complete } if={!completed}>完成</button>
  </p>
</todo>