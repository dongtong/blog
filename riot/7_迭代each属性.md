### 迭代Each属性

标签使用each属性，将会对each表达式中的值进行迭代， 将会生成多个each标签:

    <div each={languages}>{name}</div>

each可以使用索引:

    <div each={lang, index in languages}>{index} : {lang.name}</div>

languages的值为:

    <script type="es6">
      this.languages = [
        {name: 'JavaScript'},
        {name: 'Ruby'},
        {name: 'Node'},
        {name: 'Python'},
        {name: 'Go'}
      ];
    </script>

可以在mount时指定参数

    import worldCounter from '../tags/world-counter.tag';

    let params = {
      languages: [
        {name: 'JavaScript'},
        {name: 'Ruby'},
        {name: 'Node'},
        {name: 'Python'},
        {name: 'Go'}
      ];
    };

    Riot.mount(worldCounter, params);

word-counter.tag中修改为:

    <div each={opts.languages}>{name}</div>

