import React from 'react';

class CountButton extends React.Component {
    constructor (props){
        super(props);
        this.state = {value:0};
        this.buttonClicked = this.buttonClicked.bind(this);
    }

    buttonClicked(event){
        this.setState({value: this.state.value+1});
    }

    render() {
      return (
            <div id="buttonCounterBox">
                <div>Over there: {this.state.value}</div> {/*<span id="addData">Add data to collection</span>*/}
                <button onClick={this.buttonClicked} id ="counter" alt="Attilas face"></button>
            </div>
            );
    }
}

export default CountButton;
