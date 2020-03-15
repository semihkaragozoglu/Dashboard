import React from 'react'
import { cardHelper } from '../../helpers';
import { connect } from 'react-redux';
import Card from '../card';
import {SelectRefreshTime} from '../SelectRefreshTime';

class Home extends React.Component {
  constructor(props){
      super(props);
      this.state= { };
      this.loadMore = this.loadMore.bind(this);
  }
  componentDidMount() {
    const { dispatch, currentIndex } = this.props;
    if(currentIndex === 0)
    dispatch(cardHelper.getList(currentIndex, 20));
  }

  loadMore(){
    const { dispatch, currentIndex } = this.props;
    dispatch(cardHelper.getList(currentIndex, 5));
  }

  render(){
      const {cards, refreshTimeInMS} = this.props;
      return (
        <div className="content">
             <SelectRefreshTime />
          {
              cards &&
              cards.map((e,i) => (
                <Card data={e} key={i} refreshTimeInMS={refreshTimeInMS}/>
              ))
          }
          <div className="btn-loadmore">
            <button onClick={this.loadMore}>
              More
            </button>
          </div>

        {/* 
        // TODO: Add Scroll Lazy Loading - change it with 'More' button
        <div className="waypoint-loading">
          Loading
        </div>  
        */}
 
      </div>
      )
      
  }
}
function mapStateToProps(state) {
  const { loading, cards, currentIndex, refreshTimeInMS } = state.cardReducer;

  return {
    loading,
    cards,
    currentIndex,
    refreshTimeInMS
  };
}

const connectedHome = connect(mapStateToProps)(Home);
export { connectedHome as Home };
 