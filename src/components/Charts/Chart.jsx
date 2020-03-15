import React, { PureComponent } from 'react';
import {PieChart, LineChart, RadarChart, BarChart} from './index'; 
import {chartTypeConstants } from '../../constants/chartTypes.constant'; 

class Chart extends PureComponent { 
  render() {
      const {data, chartType} = this.props;
    return (
        <div width='100%'  className="Chart"> 
          {chartTypeConstants.PIE_CHART === chartType && <PieChart data={data}/>}
          {chartTypeConstants.LINE_CHART === chartType && <LineChart  data={data}/>}
          {chartTypeConstants.RADAR_CHART === chartType && <RadarChart data={data}/>}
          {chartTypeConstants.BAR_CHART === chartType && <BarChart data={data}/>}
        </div>
    );
  }
}

export {Chart}