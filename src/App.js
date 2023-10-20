import "./App.css";
import Nav from "./components/Nav";
import Singin from "./components/Singin";
import Table from "./components/Table";
import { useSelector } from "react-redux";
import Control from "./components/Control";

function App() {
  const store = useSelector((store) => store.CustomerSlice.name);

  return (
    <>
      <Nav />
      {store == "" ? (
        <Singin />
      ) : (
        <>
          <Control /> <Table />
        </>
      )}
    </>
  );
}

export default App;
