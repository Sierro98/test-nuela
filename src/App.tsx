import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <SideBar/>
        <div className="col py-3 bg-light">Content area...</div>
      </div>
    </div>
  );
}

export default App;
