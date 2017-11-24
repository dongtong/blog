const Person = (props) => {
  return (
    <div className="person">
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
    </div>
  );
}

const App = () => {
  return (
    <div>
      <Person name="foobar" age="32" />
      <Person name="helloword" age="30" />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
