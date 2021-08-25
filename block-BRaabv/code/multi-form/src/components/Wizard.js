import React from 'react'
import SignUs from './SignUs'
import Message from './Message'
import Checkbox from './Checkbox'


class Wizard extends React.Component{
    constructor(props){
        super(props)
        this.state={
            firstName:'',
            lastName:'',
            DOB:'',
            email:'',
            address:'',
            message:'',
            currentStep:1
        }
    }
    handleChange=(event)=>{
        const {name, value} = event.target
        this.setState({
            [name]:value
        })
    }
    handleNext=()=>{
        let currentState = this.state.currentStep>=2?3:this.state.currentStep+1
        this.setState({
            currentStep: currentState
        })
        console.log(this.state.currentStep)
    }
    handlePrev=()=>{
        let currentState= this.state.currentStep<=1?1:this.state.currentStep-1
        this.setState({
            currentStep:currentState
        })
    }
    handleSubmit=(event)=>{
        event.preventDefault()
        alert(`first name: ${this.state.firstName} message:${this.state.message}`)
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <h6>Step{this.state.currentStep}/3</h6>
                <SignUs firstName={this.state.firstName} lastName={this.state.lastName}
                DOB={this.state.DOB} email={this.state.email}
                address={this.state.address} currentStep={this.state.currentStep}
                handleChange={this.handleChange} handleNext={this.handleNext}/>
                <Message message={this.state.message} currentStep={this.state.currentStep} handlePrev={this.handlePrev} handleNext={this.handleNext}
                handleChange={this.handleChange}/>
                <Checkbox currentStep={this.state.currentStep} handlePrev={this.handlePrev}/>
            </form>
        )
    }
}

export default Wizard