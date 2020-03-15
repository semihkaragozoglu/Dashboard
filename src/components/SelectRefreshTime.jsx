import React from 'react'
// import { cardHelper } from '../../helpers';
import { cardActions } from '../actions';
import { connect } from 'react-redux'; 

class SelectRefreshTime extends React.Component {
  constructor(props){
      super(props);
      this.state= { }; 
      this.changeRefreshTime = this.changeRefreshTime.bind(this);
  }
 
  changeRefreshTime(event){
    const { dispatch } = this.props;
    dispatch(cardActions.changeRefreshTime(event.target.value)); 
  }
  
  render(){
      const { refreshTimeInMS } = this.props;
      return (
         <div className="select-container">
           <div>
              <label>
               Refresh Time
              </label>
              <select onChange={this.changeRefreshTime} value={refreshTimeInMS}>
                <option value="1000">1 Seconds</option>
                <option value="5000">5 Seconds</option>
                <option value="10000">10 Seconds</option>
                <option value="15000">15 Seconds</option>
                <option value="20000">20 Seconds</option>
              </select>
           </div>
         </div>
      )
      
  }
}
function mapStateToProps(state) { 
   
  const { refreshTimeInMS } = state.cardReducer;

  return {
    refreshTimeInMS
  };
}

const connectedSelectRefreshTime = connect(mapStateToProps)(SelectRefreshTime);
export { connectedSelectRefreshTime as SelectRefreshTime };
 