import MainApp from "./Context/MainApp";
import { UserProvider } from "./Context/useContext/useProvider";

function App() {
  return (  
    <UserProvider>
      <MainApp/>
    </UserProvider>
  );
}

export default App;
