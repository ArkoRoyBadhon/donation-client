"use client";
import { ArcElement, BarElement, CategoryScale, Chart as ChartJS, Legend,LinearScale,PieController,Tooltip } from "chart.js";
import { Bar, Pie } from "react-chartjs-2";


ChartJS.register(
    BarElement,
    // PieController,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    ArcElement
)

const ChartElem = () => {
    

  return (
    <div className="px-20">
      chart
      <Pie
        data={{
          labels: ["A", "B", "C"],
          datasets: [
            {
              label: "total",
              data: [200, 300, 400],
            },
          ],
        }}
      />
    </div>
  );
};

export default ChartElem;
