function Clock(props){
	return (
			<div>
				<h1> Hi World </h1>
				<p> The Time is {props.date.toLocaleTimeString()}. </p>
			</div>
	);
};

function tick(){
ReactDOM.render(<Clock date={new Date()} />, document.querySelector('#app'));
}

setInterval(tick, 1000);