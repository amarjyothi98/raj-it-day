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
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0"
                ],
                borderColor: "black",
                borderWidth: 2
            }
        ]
    }


    return (
        <PieChart chartData={chartData} title={title} />
    )
}
