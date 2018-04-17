import React, { Component } from 'react';
import Button from './Button';
import Form from './Form';
import './ToDo.css';

export default class ToDo extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: this.props.title,
            done: this.props.done,
            editing: false
        };
        this.modify = this.props.modify && (value => this.props.modify(this.props.id, value));
        this.remove = this.props.remove && (() => this.props.remove(this.props.id));
    }

    handleCheckClick = () => {
        this.setState(
            prevState => ({done: !prevState.done}),function(){
                this.modify({title: this.state.title, done: this.state.done, id:this.props.id});
            }
        );
    }

    handleEditClick = () => {
        this.setState({editing: true});
    }

    changeTitle = (title) => {
        if(title !== ''){
            this.setState({editing:false, title},function(){
                this.modify({title: this.state.title, done: this.state.done, id:this.props.id});
            }); 
        }
    }

    render(){
        return(
            <div className={this.state.done?'row done':'row'}>
                <span>{this.state.editing?<Form submit={this.changeTitle} value={this.state.title} icon="check"/>:this.state.title}</span>
                <Button icon="pencil" title="Edit" onClick={this.handleEditClick} />
                <Button icon="check" title={this.state.done?'Uncheck':'Check'} onClick={this.handleCheckClick}/>
                <Button icon="x" title="Remove" onClick={this.remove}/>
            </div>
        );
    }
}