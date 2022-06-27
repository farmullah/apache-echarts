import "./App.css";
import BarChart from "./components/BarChart";
import ScatterPlot from "./components/ScatterPlot";
function App() {
  return (
    <div className="app">
      <h4 className="heading">Scatter Plot</h4>
      <ScatterPlot />
      <h4 className="heading">Bar Chart</h4>
      <BarChart />
    </div>
  );
}

export default App;
