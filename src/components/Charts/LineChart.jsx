/* eslint-disable react/no-multi-comp */
import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
 

class CustomizedLabel extends PureComponent { 
  render() {
    const {
      x, y, stroke, value,
    } = this.props;

    return <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">{value}</text>;
  }
}

class CustomizedAxisTick extends PureComponent {
  render() {
    const {
      x, y, payload,
    } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">{payload.value}</text>
      </g>
    );
  }
}

class LineChartTemplate extends PureComponent {
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

      <LineChart 
        data={data}
        margin={{
          top: 20, right: 30, left: 20, bottom: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" label={<CustomizedLabel />} />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
      </ResponsiveContainer>
    );
  }
}

export {LineChartTemplate as LineChart};