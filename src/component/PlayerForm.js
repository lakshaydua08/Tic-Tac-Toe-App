import React from 'react';
import ReactDOM from 'react-dom';
let hello="Enter Your Names To Start Playing:";
let hello2="";
class PlayerForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      p1: '',
      p2: '',
    };
  }

  myChangeHandler = (event) => {
    var nam = event.target.name;
    var val = event.target.value;
    this.setState({[nam]: val});
    hello="Hi ";

    }
  render() {
    localStorage.clear();
    localStorage.setItem("val1",this.state.p1);
    localStorage.setItem("val2",this.state.p2);
    if(this.state.p2!='')
    {
      hello2="and "+this.state.p2+" !";
    }
    return (
      <form className="nameform">
      <div><strong className="high">{hello} {this.state.p1} {hello2}</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

      
        </div>
  <br/>
      <label>Player X: </label>
      <input
        type='text'
        name='p1'
        onChange={this.myChangeHandler}
      />
      &nbsp;&nbsp;&nbsp;
      <label>Player O: </label>
      <input
        type='text'
        name='p2'
        onChange={this.myChangeHandler}
      />
      </form>
    );
  }

}
export default PlayerForm;
ReactDOM.render(<PlayerForm/>, document.getElementById('root'));
