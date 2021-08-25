import React from 'react'

class Form extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:'',
            selected:'football',
            bio:''
        }
    }
    handleSubmit=()=>{
        alert(this.state.bio)
    }
    render(){
        return (
            <form onSubmit = {this.handleSubmit}>
                <input type="email"></input>
                <input type="password"></input>
                <input type="submit" value="Submit"></input>
            </form>
        )
    }
}

export default Form