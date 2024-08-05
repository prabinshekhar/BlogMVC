import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Demo from "./components/demo/Demo";
import DemoHeader from "./components/demo/DemoHeader";
import HomeHeader from "./components/Home/HomeHeader";
function App() {

  const auth = true
  ;

  return (
    <>
    {auth ? <HomeHeader/> : <DemoHeader/>}
      <Routes>
        <Route path="/" element={<Home /> }/>
        <Route path="/demo" element={<Demo />} />
      </Routes>
    </>
  );
}

export default App;
