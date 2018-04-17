import React, {Component} from 'react';
import Button from './Button';
import './Form.css';

export default class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            value : this.props.value || ''
        }
    }

    handleKeyDown = event => {
        if(event.key === "Enter"){
            this.submit();
        }      
    }
    
    handleChange = event =>{
        this.setState({value: event.target.value});
    }

    submit = () =>{
        this.props.submit && this.props.submit(this.state.value);
        this.setState({value: ''});
    }

    render(){
        return(
            <div className="form">
                <input 
                    placeholder={this.props.placeholder}
                    onKeyDown={this.handleKeyDown} 
                    onChange={this.handleChange} 
                    value={this.state.value}
                    autoFocus
                />
                <Button icon={this.props.icon} onClick={this.submit}/>
            </div>
        )
    }
}