function Person(props){
    return(
    <div className='person'>
      <h1> {props.name} </h1>
      <p> {props.age} </p>
    </div>
    );
  }
  
  ReactDOM.render(<Person name='John' age='27'/>, document.querySelector('#p1'));
  ReactDOM.render(<Person name='Jane' age='26'/>, document.querySelector('#p2'));
  
  // Below is another way of using components
  
  var app = (
    <div>
    <Person name='Ashish' age='30'/>
    <Person name='Goyal' age='29'/>
    </div>
  );
  
  ReactDOM.render(app, document.querySelector('#app'));