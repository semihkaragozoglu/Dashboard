import React, { PureComponent } from 'react';
import {
  PieChart, Pie, Sector, Cell, ResponsiveContainer
} from 'recharts';

 
// const data = [
//   { name: 'Group A', value: 400 },
//   { name: 'Group B', value: 300 },
//   { name: 'Group C', value: 300 },
//   { name: 'Group D', value: 200 },
// ];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


class PieChartTemplate extends PureComponent {
  constructor(props){
    super(props); 
  }
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

{/* <div style={{ width: '100%', height: 300 }}>
<ResponsiveContainer>  
<PieChart onMouseEnter={this.onPieEnter}>
    <Pie
      data={data} 
      innerRadius={40}
      outerRadius={80}
      fill="#8884d8"
      paddingAngle={5}
      dataKey="uv"
    >
      {
        data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
      }
    </Pie> 
</PieChart>
</ResponsiveContainer>
</div> */}

{/* <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie dataKey="uv"
             data={data} 
             fill="#8884d8"
             paddingAngle={5} 
             label      
             innerRadius={40}
      outerRadius={80} 
      />
        {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
          </PieChart>
        </ResponsiveContainer>
      </div> */}

{/* <ResponsiveContainer width="99%" height="100%" aspect={3}>  
<PieChart onMouseEnter={this.onPieEnter}>
    <Pie
      data={data} 
      innerRadius={40}
      outerRadius={80}
      fill="#8884d8"
      paddingAngle={5}
      dataKey="uv"
    >
      {
        data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
      }
    </Pie> 
</PieChart>
</ResponsiveContainer> */}