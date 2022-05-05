import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserTable from "./component/UserTable";

import UserUpDate from "./component/UserUpDate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserTable />} />

        <Route path="/edit/:id" element={<UserUpDate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
