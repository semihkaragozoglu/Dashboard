import React, { PureComponent } from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer
} from 'recharts';

  

 class RadarChartTemplate extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      data: this.props.data
    } 
  }
  render() {
    const {data} = this.state;
    return (
      <ResponsiveContainer aspect={1.6}>

      <RadarChart  data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis />
        <Radar name="Mike" dataKey="uv" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      </RadarChart>
      </ResponsiveContainer>
    );
  }
}

export  {RadarChartTemplate as RadarChart}