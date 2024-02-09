"use client";
import { useGetDonationCalculationQuery } from "@/redux/features/donation/donationApi";
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  ChartOptions,
  Legend,
  LinearScale,
  PieController,
  Title,
  Tooltip,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";
import AddDonation from "./addDonation";
import DonationTable from "./donationTable";

type CustomChartOptions = {
  plugins?: {
    datalabels?: any;
  };
} & ChartOptions<"pie">;

ChartJS.register(
  BarElement,
  // PieController,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  ArcElement,
  Title
);

const ChartElem = () => {
  const { data: chartData } = useGetDonationCalculationQuery(undefined);

  const labels =
    chartData &&
    Object?.keys(chartData?.data).filter(
      (key) => key !== "totalDonation" && key !== "totalDonationAmount"
    );
  const data = chartData && labels?.map((label: any) => chartData.data[label]);

  const options: CustomChartOptions = {
    plugins: {
      legend: {
        position: "right",
      },
      datalabels: {
        color: "#fff",
        display: true,
        formatter: (
          value: any,
          ctx: {
            chart: { data: { labels: { [x: string]: any } } };
            dataIndex: string | number;
          }
        ) => {
          return `${ctx.chart.data.labels[ctx.dataIndex]}: ${value}`;
        },
      },
    },
  };

  return (
    <div className="px-20 w-full pt-10">
      <div className="w-full flex justify-center">
        <div className="w-[400px]">
          <Pie
            data={{
              //   labels: ["A", "B", "C"],
              labels: labels,
              datasets: [
                {
                  label: "total",
                  data: data,
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.6)",
                    "rgba(54, 162, 235, 0.6)",
                    "rgba(255, 206, 86, 0.6)",
                    "rgba(75, 192, 192, 0.6)",
                    "rgba(153, 102, 255, 0.6)",
                  ],
                },
              ],
            }}
            options={options}
          />
        </div>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
          <div className="py-5 text-center bg-soft-green px-10 rounded-md">
            <p className="font-semibold text-white cursor-pointer text-[20px]">
              Total Donor
            </p>
            <p className="text-white leading-10">500+</p>
          </div>
          <div className="py-5 bg-soft-red text-center px-10 rounded-md">
            <p className="font-semibold text-white cursor-pointer text-[20px]">
              Total Donation
            </p>
            <p className="text-white leading-10">
              {chartData?.data?.totalDonationAmount}
            </p>
          </div>
          <div className="py-5 bg-soft-green px-10 text-center rounded-md">
            <p className="font-semibold text-white cursor-pointer text-[20px]">
              Partner Organization
            </p>
            <p className="text-white leading-10">23</p>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="font-bold text-[24px] text-soft-red">Manage Donation</h2>
          <AddDonation />

          <DonationTable />
        </div>
      </div>
    </div>
  );
};

export default ChartElem;
