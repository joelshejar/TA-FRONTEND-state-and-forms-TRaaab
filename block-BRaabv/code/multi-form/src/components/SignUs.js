import React from 'react'

class SignUs extends React.Component{
    render(){
        if(this.props.currentStep!==1){
            return null
        }
        return(
            <>
                
                <h2>Sign Up</h2>
                <label htmlFor='firstName'>First Name</label>
                <input name='firstName' id='firstName' type='text' onChange={this.props.handleChange}></input>
                <label htmlFor='lastName'>Last Name</label>
                <input name='lastName' id='lastName' type='text' onChange={this.props.handleChange}></input>
                <label htmlFor='DOB'>DOB</label>
                <input name='DOB' id='DOB' type='text' onChange={this.props.handleChange}></input>
                <label htmlFor='email'>Email</label>
                <input name='email' id='email' type='email' onChange={this.props.handleChange}></input>
                <label htmlFor='address'>Address</label>
                <input name='address' id='address' type='text' onChange={this.props.handleChange}></input>
                <h3 onClick={this.props.handleNext} >Next</h3>
            </>
            
        )
    }
}

export default SignUs