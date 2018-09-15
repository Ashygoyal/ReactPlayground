function tick(){
    const timings = (
        <div>
            <h1> Hey World! </h1>
            <p> The time is {new Date().toLocaleTimeString()}.</p>
        </div>
    );
    ReactDOM.render(timings, document.querySelector('#app'));
}

setInterval(tick, 1000);