import React from 'react'
import '../styles/index.css'
import Data from './data.json'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            foodType:null
        }
    }
    render(){
        let foodType = Data.reduce((acc,cv)=>{
            return acc = acc.concat(cv.category)
        },[])
        let foodTypes = [...new Set(foodType)]
        console.log(this.state.foodType)
        (<>
        {return foodTypes.map((type, i)=>{
            return(
                <main>
                    <h2 onClick={(type)=>{this.setState({
                            foodType: type
                        })
                    }}>{type}</h2>
                    {Data.filter((elm)=>{
                        return elm.category===this.state.foodType?(
                            <h3>{elm.title}</h3>
                        ): ''
                    })}
                </main>
            )
        })}
        </>)
    }
}

export default App