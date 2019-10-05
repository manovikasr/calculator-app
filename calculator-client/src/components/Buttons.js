import React from 'react';
import {Component} from 'react';

class Buttons extends Component {

    render() {
        return (
            <div className="button">
                <button name="1" className="num-button" onClick={e => this.props.onClick(e.target.name)}>1</button>
                <button name="2" className="num-button" onClick={e => this.props.onClick(e.target.name)}>2</button>
                <button name="3" className="num-button" onClick={e => this.props.onClick(e.target.name)}>3</button>
                <button name="+" className="oper-button" onClick={e => this.props.onClick(e.target.name)}>+</button><br/>

                <button name="4" className="num-button" onClick={e => this.props.onClick(e.target.name)}>4</button>
                <button name="5" className="num-button" onClick={e => this.props.onClick(e.target.name)}>5</button>
                <button name="6" className="num-button" onClick={e => this.props.onClick(e.target.name)}>6</button>
                <button name="-" className="oper-button" onClick={e => this.props.onClick(e.target.name)}>-</button><br/>

                <button name="7" className="num-button" onClick={e => this.props.onClick(e.target.name)}>7</button>
                <button name="8" className="num-button" onClick={e => this.props.onClick(e.target.name)}>8</button>
                <button name="9" className="num-button" onClick={e => this.props.onClick(e.target.name)}>9</button>
                <button name="*" className="oper-button" onClick={e => this.props.onClick(e.target.name)}>*</button><br/>


                <button name="." className="num-button" onClick={e => this.props.onClick(e.target.name)}>.</button>
                <button name="0" className="num-button" onClick={e => this.props.onClick(e.target.name)}>0</button>
                <button name="=" className="equal-button" onClick={e => this.props.onClick(e.target.name)}>=</button>
                <button name="/" className="oper-button" onClick={e => this.props.onClick(e.target.name)}>÷</button><br/>
                
                <button name="C" className="clear-button" onClick={e => this.props.onClick(e.target.name)}>Clear</button> <br/>
            </div>
        );
    }
}


export default Buttons;