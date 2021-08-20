import React from 'react'
import '../styles/index.css'


class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count: 0,
            increaseBy:1
        }
    }
    handleIncrement=()=>{
        this.setState({
            count:this.state.count + this.state.increaseBy
        })
    }
    handleDecrement=()=>{
        this.setState({
            count:this.state.count - this.state.increaseBy
        })
    }
    handleReset=()=>{
        this.setState({
            count: 0
        })
    }
    handleSetCount=(event)=>{
        this.setState({
            increaseBy:5
        })
    }
    render(){
        return (
            <main>
                <h2>{this.state.count}</h2>
                <div>
                    <button onClick={this.handleSetCount}>5</button>
                    <button>10</button>
                    <button>15</button>
                </div>
                <div>
                    <button onClick={this.handleIncrement}>increment</button>
                    <button onClick={this.handleDecrement}>decrement</button>
                    <button onClick={this.handleReset}>reset</button>
                </div>
            </main>
        )
    }
}
export default App