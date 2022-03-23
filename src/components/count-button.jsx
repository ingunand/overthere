import React from 'react';
import attila from '../overthere_large.png';

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
                <div onClick={this.buttonClicked} id ="counter"><img src={attila} alt="Attilas face"></img></div>
            </div>
            );
    }
}

export default CountButton;
