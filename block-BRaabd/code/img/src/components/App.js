import React from 'react'
import '../styles/index.css'


class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            imgState: ''
        }
    }
    handleBasketball = ()=>{
        this.setState({
            imgState: './assets/basketball.jpg'
        })
    }
    handlePubg = ()=>{
        this.setState({
            imgState: './assets/pubg.jpg'
        })
    }
    handleTiger = ()=>{
        this.setState({
            imgState: './assets/tiger.jpg'
        })
    }
    render(){
        return(
            <main>
                <div>
                    <button onClick = {this.handleBasketball}>Basketball</button>
                    <button onClick = {this.handlePubg}>Pubg</button>
                    <button onClick = {this.handleTiger}>Tiger</button>
                    <button >Phone</button>
                    <button >Laptop</button>
                    <button >Cricket</button>
                </div>
                <img src={`${this.state
                .imgState}`} alt='im'/>
            </main>
        )
    }
}


export default App