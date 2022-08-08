import MyHeader from "./components/MyHeader";
import Home from "./pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
