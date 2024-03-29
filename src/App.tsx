import SideBar from "./components/SideBar";
import ProfesoresScreen from "./components/ProfesoresScreen";

function App() {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <SideBar/>
        <div className="col py-3 bg-light">
          <ProfesoresScreen/>
        </div>
      </div>
    </div>
  );
}

export default App;
