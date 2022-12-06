import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmployListing from "./components/EmployListing";
import EmployCreate from "./components/EmployCreate";
import EmployDetail from "./components/EmployDetail";
import EmployUpdate from "./components/EmployUpdate";
function App() {
  return (
    <div className="App">
      <h1>React JS CRUD Operations</h1>
      <Router>
        <Routes>
          <Route path="/" element={<EmployListing />} />
        <Route path="/employee/create" element={<EmployCreate />} />
        <Route path="/employee/detail/:id" element={<EmployDetail />} />
        <Route path="/employee/edit/:id" element={<EmployUpdate />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
