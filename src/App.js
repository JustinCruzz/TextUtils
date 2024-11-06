//import logo from "./logo.svg";
import "./App.css";
//import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <div className="App">
      <Navbar title="TextUtils" abouttext="About"/>
      <div className="container my-3">
      <TextForm heading="Enter the text to analyze"/>
      {/* <About/> */}
      </div>
    </div>
  );
}

export default App;
