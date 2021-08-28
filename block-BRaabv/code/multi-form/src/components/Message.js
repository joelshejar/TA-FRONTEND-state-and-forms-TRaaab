import React from 'react'

class Message extends React.Component{
    render(){
        if(this.props.currentStep!==2){
            return null
        }
        return(
            <>
                <label htmlFor='message'>Message</label>
                <textarea onChange={this.props.handleChange} id='message' name='message' rows='4' columns='50'></textarea>
                <h3 onClick={this.props.handlePrev}>Prev</h3>
                <h3 onClick={this.props.handleNext}>Next</h3>
            </>
            
        )
    }
}

export default Message