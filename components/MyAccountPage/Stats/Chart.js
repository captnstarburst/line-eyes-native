import React from 'react';
import {Dimensions} from 'react-native';
import {PieChart} from 'react-native-chart-kit';

const data = [
  {
    name: 'Positives',
    population: 21,
    color: 'rgba(131, 167, 234, 1)',
    legendFontColor: '#7F7F7F',
    legendFontSize: 10,
  },
  {
    name: 'Invalids',
    population: 10,
    color: '#F00',
    legendFontColor: '#7F7F7F',
    legendFontSize: 10,
  },
  {
    name: 'Negatives',
    population: 15,
    color: 'red',
    legendFontColor: '#7F7F7F',
    legendFontSize: 10,
  },
];

const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#08130D',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};
const Chart = () => {
  return (
    <PieChart
      data={data}
      width={Dimensions.get('window').width}
      height={250}
      chartConfig={chartConfig}
      accessor={'population'}
      backgroundColor={'transparent'}
      paddingLeft={'10'}
      center={[50, 10]}
      hasLegend={true}
      absolute
    />
  );
};

export default Chart;
