import React from 'react';
import { Container } from '@material-ui/core';
import { Line } from 'react-chartjs-2';

export const Chart = (props) => {
  return (
    <Container>
      {props.data?.length ? <Line
        data={{
          labels: props.data.map(({ reportDate }) => reportDate.slice(5, 10)),
          datasets: [
            {
              label: 'Infected',
              backgroundColor: 'rgba(255, 142, 44, 1)',
              borderColor: '#cf1d25',
              data: props.data.map(({ confirmed }) => confirmed),
            },
            {
              label: 'Deaths',
              fill: true,
              backgroundColor: '#cf1d25',
              borderColor: 'red',
              data: props.data.map(({ deaths }) => deaths),
            }
          ],
        }} /> : ''}
    </Container>
  )
}