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
            timeOutId: null,
            refreshTimeInMS: null
        };
        this.getChartData = this.getChartData.bind(this);
    }
    componentDidMount(){
        if(this.state.intervalId !== null){ 
            clearInterval(this.state.intervalId);
        } 
        this.getChartData();
        var intervalId = setInterval(()=> 
            this.getChartData(), this.props.refreshTimeInMS);
        this.setState({
            intervalId: intervalId,
            refreshTimeInMS: this.props.refreshTimeInMS
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
                    this.setState({
                        isLoading: true,
                        data: chartData
                    });
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
   
    componentDidUpdate(){
        if(this.state.intervalId !== null && this.state.refreshTimeInMS !== this.props.refreshTimeInMS){

            clearInterval(this.state.intervalId);
            var intervalId = setInterval(()=> 
                this.getChartData(), this.props.refreshTimeInMS);
            this.setState({
                intervalId: intervalId,
                refreshTimeInMS: this.props.refreshTimeInMS
            });
        }   
    }
  
    render() {
        const { name, chartType, isLoading, data } = this.state;
        return ( 
          <div className={"card " + (isLoading ? "loading" : "") }>
              {
                  !isLoading  ?
                  <Chart data={data} chartType={chartType}/>
                  :
                  <div>
                      <p>Yükleniyor</p>
                  </div>
                 
              }   
            <div className="description">
            <p className="card-name">{name}</p>
            </div>
        </div> 
        );
    } 
}
