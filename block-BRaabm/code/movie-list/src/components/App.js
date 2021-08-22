import React from 'react'
import '../styles/index.css'
import Modal from './Modal'
import data from './data.json'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            showModal:false,
            movieName:''
        }
    }
    handleModal=(p)=>{
        this.setState({
            showModal:true,
            movieName:p,
        })
    }
    render(){
        return {
            data.map((movie)=>{
            return(<h2 key={movie.Title}>{movie.Title}
                <p onClick={()=>this.handleModal({movie})}>More Info</p>
            </h2>)
        })
            Modal show={this.state.showModal} sent={this.state.movieName}/>
    }
}
}

export default App