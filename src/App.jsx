import LocomotiveScroll from "locomotive-scroll";
import { Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import Ketaminetherapy from "./pages/Ketaminetherapy/Ketaminetherapy";
import Loader from "./Components/Loader";
import Wellnesthraypy from "./pages/Wellnesthraypy/wellnesthraypy";
import Ketamineinfusion from "./pages/ketamineinfusion/ketamineinfusion";

const App = () => {
    const scroll = new LocomotiveScroll();
return (
    <div className="">
          <Loader/> 

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Ketaminetherapy" element={<Ketaminetherapy />} />
          <Route path="/Wellnesthraypy" element={<Wellnesthraypy />} />
          <Route path="/Ketamineinfusion" element={<Ketamineinfusion />} />
        </Routes>
    </div>
  );
};

export default App;
