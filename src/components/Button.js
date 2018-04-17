import React, {Component} from 'react';
import './Button.css';

export default class Button extends Component{
    render(){
        return(
        <div className="button" onClick={this.props.onClick} title={this.props.title}>
            <span className="oi" data-glyph={this.props.icon} aria-hidden="true"></span>
        </div>);
    }
}