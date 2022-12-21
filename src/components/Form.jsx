import {Component} from 'react'
import ShowTheMessage from './ShowTheMessage'
import Btn from './Btn'
const styles = {
    'width':'250px',
    'height':'35px'
}

export default class Form extends Component{
    constructor(){
        super()
        this.state ={
            inputValue:"",
            myMessage:""
        }
    }

    render(){
        return(
        <>
        <form>
            <h1>A Message You Would Like To Pass</h1>
            <input 
            placeholder='write some message'
            value={this.state.inputValue} 
            onChange={(e)=>this.setState({inputValue:e.target.value})}
            style={styles} /><br/>
            <button style={styles} 
            onClick={(e)=>{
                e.preventDefault()
                this.setState({myMessage:this.state.inputValue})
                this.setState({inputValue:""})
            }}>Submit</button>
        </form>
        <ShowTheMessage myMessage={this.state.myMessage}/>
        </>
        )
    }
}
