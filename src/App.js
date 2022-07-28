import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return <div className="App">
    <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Main/>}></Route>
    </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
