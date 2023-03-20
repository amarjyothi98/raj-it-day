import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import PieChart from "./PieChart";
import { Data } from "./data";
Chart.register(CategoryScale);

export default function App() {
    const chartData={
        labels: Data.map((data) => data.year),
        datasets: [
            {
                label: "Review Feebacks",
                data: Data.map((data) => data.userGain),
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


    return(
        <PieChart chartData={chartData}/>
    )
}
