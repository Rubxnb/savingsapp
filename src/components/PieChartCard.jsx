import { useContext, useEffect, useState } from 'react';
import { BankActivityContext } from '../context/bankActivity';
import { Card, CardContent } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';


export default function PieChartCard() {
  const { bankActivity } = useContext(BankActivityContext);

  const [data, setData] = useState([]);
  
  useEffect(() => {
    const newData = bankActivity.map((item, index) => {
      return {
        id: index,
        value: item.money,
        label: item.type
      };
    });
    setData(newData);
  }, [bankActivity]);

  return(
    <Card 
      sx={{
        borderRadius: '16px',
        boxShadow: '3'
      }}>
      <CardContent
        sx={{
          width: '25rem'
        }}>
        <PieChart
          series={[
            {
              data,
              highlightScope: { faded: 'global', highlighted: 'item' },
              faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
            },
          ]}
          height={200}
        />
      </CardContent>

    </Card>
  );
}