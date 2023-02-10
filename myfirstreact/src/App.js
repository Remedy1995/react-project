
import MyProfile from "./components/myprofile";
import MyInformation from "./components/myInformation";
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route exact path="/home"  element={ <MyProfile/>} />
      <Route exact path="/information" element={<MyInformation/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
