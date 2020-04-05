import React from 'react';
import './Tiktak.css';

class Tiktak extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            diceArray: Array(9).fill(null),
            count: 0,
            cursor: {cursor: 'crosshair'}
        }
        this.winnerLines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
    }

    isWinner = () => {
        let s = (this.state.count % 2 === 0) ? 'X' : 'O';
        for (let i = 0; i < 8; i++) {
            let line = this.winnerLines[i];
            if (this.state.diceArray[line[0]] === s
                && this.state.diceArray[line[1]] === s
                && this.state.diceArray[line[2]] === s) {
                alert(s + ' win!');
                
                setTimeout(() => {
                    this.setState({ diceArray: Array(9).fill(null) });
                    this.setState({ count: 0 });
                }, 1500)
            }
        }

    }

    createBox = (e) => {
        let data = e.target.getAttribute('data');
        let currentPeace = this.state.diceArray;
        if (currentPeace[data] === null) {
            currentPeace[data] = (this.state.count % 2 === 0) ? 'X' : 'O';
            if(this.state.count % 2 === 0) {
                this.setState({cursor: {cursor: 'wait'}});
            } 
            else {
                this.setState({cursor: {cursor: 'crosshair'}});
            }
            this.setState({ diceArray: currentPeace });
            this.setState({ count: this.state.count + 1 });
        }
        else {
            alert('Ячейка уже занята.')
        }

        this.isWinner();
    }
    render() {
        return (
            <div className="dice" style={this.state.cursor}>
                <div onClick={this.createBox} className="dicePeace" data="0">
                    {this.state.diceArray[0]}
                </div>
                <div onClick={this.createBox} className="dicePeace" data="1">
                    {this.state.diceArray[1]}
                </div>
                <div onClick={this.createBox} className="dicePeace" data="2">
                    {this.state.diceArray[2]}
                </div>
                <div onClick={this.createBox} className="dicePeace" data="3">
                    {this.state.diceArray[3]}
                </div>
                <div onClick={this.createBox} className="dicePeace" data="4">
                    {this.state.diceArray[4]}
                </div>
                <div onClick={this.createBox} className="dicePeace" data="5">
                    {this.state.diceArray[5]}
                </div>
                <div onClick={this.createBox} className="dicePeace" data="6">
                    {this.state.diceArray[6]}
                </div>
                <div onClick={this.createBox} className="dicePeace" data="7">
                    {this.state.diceArray[7]}
                </div>
                <div onClick={this.createBox} className="dicePeace" data="8">
                    {this.state.diceArray[8]}
                </div>
            </div>
        )
    }

}

export default Tiktak;