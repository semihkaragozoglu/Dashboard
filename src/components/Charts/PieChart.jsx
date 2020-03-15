import React, { PureComponent } from 'react';
import {
  PieChart, Pie, Cell, ResponsiveContainer
} from 'recharts';
 
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
 
class PieChartTemplate extends PureComponent {
   
  render() {
    const {data} = this.props;
    return (
      <div style={{ width: '100%', height: 200 }}>
      <ResponsiveContainer>
      <PieChart>
        <Pie  
          data={data} 
          innerRadius={'40%'}
          outerRadius={'60%'}
          fill="#8884d8"
          paddingAngle={5}
          label
          dataKey="uv">
          { 
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          } 
          </Pie> 
      </PieChart>
     </ResponsiveContainer>
     </div>
    );
  }
}

export {PieChartTemplate as PieChart}
 