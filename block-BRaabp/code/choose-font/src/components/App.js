import React from 'react'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            userInput:'',
            range:10
        }
    }
    handleChange=(event)=>{
        this.setState({
            userInput:event.target.value
        })
    }
    handleRange=(event)=>{
        this.setState({
            range:event.target.value
        })
    }
    render(){
        let classes = ['courier','sans','franklin']
        return (
            <>
                <input onChange={this.handleChange} type='text' placeholder='Enter a random string'></input>
                <input onChange={this.handleRange} type="range"min="0" max="100"/>
                {
                    classes.map((elm)=>{
                        return(
                            <h3 className={elm} style={{fontSize:`${this.state.range}px`}}>{this.state.userInput}</h3>
                        )
                    })
                }
            </>
        )
    }
}

export default App