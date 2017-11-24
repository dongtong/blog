const Person = (props) => {
  return (
    <div className="person">
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
    </div>
  );
}

ReactDOM.render(<Person name="foobar" age="32" />, document.querySelector('#p1'));
ReactDOM.render(<Person name="helloword" age="30" />, document.querySelector('#p2'));
