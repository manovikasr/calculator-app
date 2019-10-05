import React from 'react';
import {Component} from 'react';
import axios from 'axios';
import Display from './Display';
import Buttons from './Buttons';

class Calculator extends Component {
    constructor(props){
        super(props);
        this.state = {
            result: "",
            mode: "input"
        }
    }

    onClick = button => {
        if(button === "="){
            this.calculate();
            this.setState({
                mode: "solution"
            })
        }
        else if(button === "C"){
            this.clear()
        }
        else {
            if(this.state.mode === "solution"){
                this.setState({
                    mode: "input",
                    result: ""
                })
            }
            this.setState({
                result: this.state.result + button
            })
        }
    };

    calculate = () => {
        axios.post("http://127.0.0.1:3001/calculate", {input: this.state.result})
        .then(response => {
            this.setState({
                result: response.data
            });
        })
        .catch(error => {
            console.log(error);
            if(error.response){
                this.setState({
                result: error.response.data
                })
            }
        });
    };

    clear = () => {
        this.setState({
            result: ""
        })
    };

    render() {
        return (
                <div className="calculator-body">
                    <div>
                    <center>
                    <h1>Calculator</h1>
                    <Display result={this.state.result}/>
                    <Buttons onClick={this.onClick}/>
                    </center>
                    </div>
                </div>
        );
    }
}

export default Calculator;