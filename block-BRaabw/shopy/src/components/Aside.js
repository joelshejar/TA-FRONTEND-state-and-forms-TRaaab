import React from 'react'
import Main from './Main'

class Aside extends React.Component{
    constructor(props){
        super(props)
        this.state={
            checkedState: new Array(7).fill(false)
        }
    }
    handleChecked=(i)=>{
        let presentState = this.state.checkedState.map((elm,index)=>{
            if(index===i){
                return elm=!elm
            }else{
                return elm
            }
        })
        this.setState({
            checkedState:presentState
        })
    }
    render(){
        let sizes=['XS','S','M','ML','L','XL','XXL']
        return(
            <>
            <div className='size'>
                {sizes.map((elm,i)=>{
                    return(
                    <>
                    <label key={elm} htmlFor={elm}>{elm}</label>
                    <input onChange={()=>this.handleChecked(i)} type="checkbox" id={elm}></input>
                    </>
                    )
        })}
                
            </div>
            <Main checkedState={this.state.checkedState} handleChecked={this.handleChecked} />
            </>
            
        )
    }
}


export default Aside
