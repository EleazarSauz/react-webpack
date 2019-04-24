import React, { Component } from 'react'

class App extends Component {

    state = {
        tools: {
            title: 'React & Webpack'
        }
    };

    handleClick = () => {
        const task = this.state.tools;
        tools.title = !task.done;
        this.setState({
            task
        });
    }

    render() {
        return (
            <div>
                <h1>App with {this.state.tools.title} and more...</h1>
               
                <img src="https://i1.wp.com/lumox.xyz/wp-content/uploads/2018/07/es6-webpack-react-babel.png" 
                    alt="es6-webpack-react-babel" width="85%" />
            </div>
        )
    }

}

export default App;