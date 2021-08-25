import React from 'react'

class Checkbox extends React.Component{
    render(){
        if(this.props.currentStep!==3){
            return null
        }
        return(
            <>
                <label htmlFor='checked'>First Option</label>
                <input type='checkbox' name='checked' id='checked'></input>
                <h3 onClick={this.props.handlePrev}>Prev</h3>
                <button>Submit</button>
            </>
        )
    }
}

export default Checkbox