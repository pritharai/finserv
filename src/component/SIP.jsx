import React, { useState } from "react";
import { Slider, ToggleButton, ToggleButtonGroup, Button } from "@mui/material";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);
const SIP = () => {
  const [type, setType] = useState("SIP");
  const [monthlyInvestment, setMonthlyInvestment] = useState(25000);
  const [returnRate, setReturnRate] = useState(12);
  const [timePeriod, setTimePeriod] = useState(10);

  const totalMonths = timePeriod * 12;
  const r = returnRate / 100 / 12;

  const investedAmount = type === "SIP"
    ? monthlyInvestment * totalMonths
    : monthlyInvestment;

  const estReturns =
    type === "SIP"
      ? monthlyInvestment *
      ((Math.pow(1 + r, totalMonths) - 1) * (1 + r)) / r -
      investedAmount
      : investedAmount * Math.pow(1 + r * 12, timePeriod) - investedAmount;

  const totalValue = investedAmount + estReturns;

  const data = {
    labels: ["Invested Amount", "Est. Returns"],
    datasets: [
      {
        data: [investedAmount, estReturns],
        backgroundColor: ["#00d0a3", "#061945"],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="p-8 max-w-6xl mx-auto bg-white rounded-md shadow-lg">
      <h1 className="text-3xl font-bold text-center text-blue-900 mb-6">
        SIP Calculator
      </h1>

      {/* Toggle */}
      <ToggleButtonGroup
        value={type}
        exclusive
        onChange={(e, val) => val && setType(val)}
        className="mb-6 w-full justify-center"
      >
        <ToggleButton
          value="SIP"
          style={{ backgroundColor: type === "SIP" ? "#8BC34A" : "" }}
        >
          SIP
        </ToggleButton>
        <ToggleButton
          value="Lumpsum"
          style={{ backgroundColor: type === "Lumpsum" ? "#8BC34A" : "" }}
        >
          Lumpsum
        </ToggleButton>
      </ToggleButtonGroup>

      <div className="flex flex-col md:flex-row gap-10 items-center">
        {/* Controls */}
        <div className="flex-1 space-y-6">
          <div>
            <label>Monthly Investment (₹)</label>
            <Slider
              value={monthlyInvestment}
              onChange={(e, val) => setMonthlyInvestment(val)}
              step={1000}
              min={1000}
              max={100000}
            />
            <div className="text-right text-lg">₹ {monthlyInvestment}</div>
          </div>

          <div>
            <label>Expected Return Rate (%)</label>
            <Slider
              value={returnRate}
              onChange={(e, val) => setReturnRate(val)}
              step={0.5}
              min={1}
              max={20}
            />
            <div className="text-right text-lg">{returnRate}%</div>
          </div>

          <div>
            <label>Time Period (Years)</label>
            <Slider
              value={timePeriod}
              onChange={(e, val) => setTimePeriod(val)}
              step={1}
              min={1}
              max={30}
            />
            <div className="text-right text-lg">{timePeriod} Yr</div>
          </div>

          {/* Results */}
          <div className="flex justify-between text-lg font-semibold mt-6">
            <div>
              <p>Invested Amount</p>
              <p>₹{investedAmount.toLocaleString()}</p>
            </div>
            <div>
              <p>Est. Returns</p>
              <p>₹{estReturns.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
            </div>
          </div>

          <div className="text-center mt-4 text-xl font-bold text-blue-900">
            Total Value ₹{totalValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}
          </div>

          <div className="mt-4 text-center">
            <Button variant="contained" color="primary">
              INVEST NOW
            </Button>
          </div>
        </div>

        {/* Chart */}
        <div className="flex-1 w-full max-w-sm">
          <Doughnut data={data} />
        </div>
      </div>
    </div>
  );
}

export default SIP

