import React from 'react'
import data from '../data.json'

class Main extends React.Component{
    constructor(props){
        super(props)
        this.state={
            setOption:'lowest'
        }
    }
    handleOption=(event)=>{
        this.setState({
            setOption: event.target.value
        })
    }
    render(){
        let sizes=['XS','S','M','ML','L','XL','XXL']
        let filteredSize =[]
        this.props.checkedState.filter((elm,i)=>
        {if(elm===true){
            filteredSize.push(sizes[i])
        }})
        let requiredSize=this.props.checkedState.includes(true)?filteredSize:sizes
        console.log(requiredSize)
        // let requiredDress=requiredSize.map((elm1)=>{
        //     return data.products.filter((elm)=>{
        //         if(elm.availableSizes.includes(elm1)){
        //             return elm
        //         }
        //     })
        // })
        // console.log(requiredDress)
        let requiredDress=[]
        for(let i=0;i<requiredSize.length;i++){
            for(let j=0;j<data.products.length;j++){
                if(data.products[j].availableSizes.includes(requiredSize[i])){
                    requiredDress.push(data.products[j]) 
                }
            }
        }
        
        if(this.state.setOption==='lowest' ){
            let newArray= requiredDress
            for(let i=1;i<newArray.length;i++){
                let j=i-1
                let temp=newArray[i].price
                while(j>=0 && newArray[j].price>temp){
                    newArray[j + 1].price = newArray[j].price
                    j--  ;           
                }
                newArray[j+1].price = temp
            }
            
            return (<>
                <h2>Order By</h2>
                <select value={this.state.setOption} onChange={this.handleOption}>
                    <option  value='lowest'>Lowest to Highest</option>
                    <option value='highest'>Highest to lowest</option>
                </select>
                { newArray.map((elm)=>{
                return(
                    <div>
                        <h3>{elm.title}</h3>
                        <h4>{elm.price}</h4>
                    </div>
                    
                )
            })
                }</>)

        
        
    } else{
        let newArray= requiredDress
            for(let i=1;i<newArray.length;i++){
                let j=i-1
                let temp=newArray[i].price
                while(j>=0 && newArray[j].price>temp){
                    newArray[j + 1].price = newArray[j].price
                    j--  ;           
                }
                newArray[j+1].price = temp
            }
            return (<>
                <h2>Order By</h2>
                <select value={this.state.setOption} onChange={this.handleOption}>
                    <option  value='lowest'>Lowest to Highest</option>
                    <option value='highest'>Highest to lowest</option>
                </select>
                { newArray.reverse().map((elm)=>{
                return(
                    <div>
                        <h3>{elm.title}</h3>
                        <h4>{elm.price}</h4>
                    </div>
                    
                )
            })
                }</>)

    }
}
}

export default Main

