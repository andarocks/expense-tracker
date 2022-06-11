import ChartBar from './ChartBar.js';
import './Chart.css';
const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((datapoint) => datapoint.value);
  const totalMax = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          maxValue={totalMax}
          value={datapoint.value}
          label={datapoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
