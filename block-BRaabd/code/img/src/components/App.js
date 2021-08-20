import React from 'react'


class App extends React.Component{
    constructor(props){
        super(props)
        this.State = {
            img: ''
        }
    }
    handleBasketball = ()=>{
        this.setState({
            img: require('../assets/basketball.jpg')
        })
    }
    render(){
        return(
            <main>
                <div>
                    <button onClick = {this.handleBasketball}>Basketball</button>
                    <button >Pubg</button>
                    <button >Tiger</button>
                    <button >Phone</button>
                    <button >Laptop</button>
                    <button >Cricket</button>
                </div>
                <img src={this.State.img} alt='im'/>
            </main>
        )
    }
}


export default App