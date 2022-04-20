import DefaultLayout from "./component/DefaultLayout.jsx";
import Login from "./component/Login/Login.js";
import { useSelector } from "react-redux";

function App() {
  const isLogged = useSelector((state) => state.login.isLogged);

  return (
    <div className="App">
      {isLogged === true && <DefaultLayout />}
      {isLogged === false && <Login />}
    </div>
  );
}

export default App;
