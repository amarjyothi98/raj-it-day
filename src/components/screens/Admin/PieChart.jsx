
import React from "react";
import { Pie } from "react-chartjs-2";

function PieChart({ chartData, title }) {
  return (
    <div className="chart-container">
      <h5 style={{ textAlign: "center" }}>Q. {title}</h5>
      <Pie
        data={chartData}
        options={{
          responsive:true
        }}
      />
    </div>
  );
}
export default PieChart;