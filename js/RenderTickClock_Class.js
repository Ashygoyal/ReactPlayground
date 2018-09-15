class Clock extends React.Component {
    render(){
        return(
            <div>
            <h1>Hi, world!</h1>
            <h2>The Time is {this.props.date.toLocaleTimeString()}.</h2>
          </div>
        );
    }
}

function tick(){
    ReactDOM.render(
        <Clock date={new Date()} />,
        document.querySelector('#app')
    );
}

setInterval(tick, 1000);