import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Card } from "antd";

const DoughnutGraph = ({ heading, label1, data1, label2, data2 }) => {
  //   console.log(data);
  const dataToPlot = {
    labels: [label1, label2],
    datasets: [
      {
        data: [data1, data2],
        backgroundColor: ["#FF6384", "#FFCE56", "#36A2EB"],
        hoverBackgroundColor: ["#FF6384", "#FFCE56", "#36A2EB"],
      },
    ],
  };

  const option = {
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          var dataset = data.datasets[tooltipItem.datasetIndex];
          var meta = dataset._meta[Object.keys(dataset._meta)[0]];
          var total = meta.total;
          var currentValue = dataset.data[tooltipItem.index];
          var percentage = parseFloat(
            ((currentValue / total) * 100).toFixed(1)
          );
          return currentValue + " (" + percentage + "%)";
        },
        title: function (tooltipItem, data) {
          return data.labels[tooltipItem[0].index];
        },
      },
    },
  };

  return (
    <div className="chart-doughnut">
      <h3>{heading}</h3>
      <Doughnut data={dataToPlot} options={option} />
    </div>
  );
};

export default DoughnutGraph;
