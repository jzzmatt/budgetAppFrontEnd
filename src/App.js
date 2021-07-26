import "tailwindcss/tailwind.css";
import SummaryDashBoard from "./components/SummaryDashboard";
import IncomesDashboard from "./components/IncomesDashboard";
import IncomesInput from "./components/IncomesInput";
import IncomesDisplay from "./components/IncomesDisplay";

export default function App() {
  return (
    <div className="bg-blue-100 min-h-screen">
      <div className="container w-100 mx-auto text-center py-12">
        <div className="text-gray-500">
          <SummaryDashBoard />
          <IncomesDashboard />
          <IncomesInput />
          <IncomesDisplay />
        </div>
      </div>
    </div>
  );
}
