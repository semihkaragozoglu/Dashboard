import * as React from 'react'; 
import { cardService } from '../services/card.service';
import {Chart } from './Charts/Chart';
 
export default class Card extends React.Component {
    constructor(props){
        super(props); 
        this.state={
            isLoading: true,
            id: this.props.data.id,
            name: this.props.data.name,
            description: this.props.data.description,
            chartType: this.props.data.chartType,
            data: null,
            intervalId: null,
            timeOutId: null
        };
        this.getChartData = this.getChartData.bind(this);
        this.refreshChartData = this.refreshChartData.bind(this);
    }
    componentDidMount(){
        if(this.state.intervalId !== null){ 
            clearInterval(this.state.intervalId);
        } 
        this.getChartData();
        var intervalId = setInterval(()=> 
            this.getChartData(), this.props.refreshTimeInMS);
        this.setState({
            intervalId: intervalId
        });
    } 
    
    componentWillUnmount() { 
        clearInterval(this.state.intervalId);
        clearTimeout(this.state.timeOutId);
    }
     
    getChartData(){
        cardService.getChartData() 
            .then(
                data => { 
                    const {chartData , fakeResponseTimeInMS} = data.filter(x=> x.id === this.state.id)[0]; 
                    var timeOutId = setTimeout(() => {
                        this.setState({
                            isLoading: false,
                            data: chartData
                        });
                    }, fakeResponseTimeInMS);
                    this.setState({
                        timeOutId: timeOutId
                    });
                },
                error => {
                    // console.log("error");
                }
            ); 
    }
   
    refreshChartData() { 
        console.log("refreshed");
        this.getChartData();
     }
 
    render() { 
        const { id, name, description, chartType, isLoading, data } = this.state;
        return ( 
          <div className={"card " + (isLoading ? "loading" : "") }>
              {
                  !isLoading  ?
                  <Chart data={data} chartType={chartType}/>
                  :
                  <div>
                      <p style={{fontSize: '60px'}}>Yükleniyor</p>
                  </div>
                 
              }   
            <div className="description">
            <p className="card-name">{name}</p>
            </div>
        </div> 
        );
    } 
}
