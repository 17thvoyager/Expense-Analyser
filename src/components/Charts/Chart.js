import ChartBar from './ChartBar';
import './Chart.css';

const Chart = Props => {

    const dataPointValue = Props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMaximum = Math.max(...dataPointValue)

    return(
        <div className="chart">
            {Props.dataPoints.map( dataPoint => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label}
                />
            ))}
        </div>
    )
}


export default Chart;
