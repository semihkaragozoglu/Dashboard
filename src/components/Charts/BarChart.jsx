import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

 

class BarChartTemplate extends PureComponent {
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

      <BarChart 
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
      </ResponsiveContainer>
    );
  }
}

export {BarChartTemplate as BarChart}