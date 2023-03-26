import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import PieChart from "./PieChart";
Chart.register(CategoryScale);

export default function App({ title, metrics }) {
    const Data = [];

    Object.keys(metrics).map((param, index) => {
        return Data.push({
            id: index,
            param: param,
            totalResponses: metrics[param]
        })
    })

    console.log(Data)



    const chartData = {
        labels: Data.map((data) => data.param),
        
        datasets: [
            {
                label: "Total Responses",
                data: Data.map((data) => data.totalResponses),
                backgroundColor:['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
                '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
                '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
                '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
                '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
                '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
                '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
                '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
                '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
                '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'],
                borderColor: "black",
                borderWidth: 2
            }
        ]
    }


    return (
        <PieChart chartData={chartData} title={title} />
    )
}
