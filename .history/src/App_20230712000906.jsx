import { Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Nav />
        </Route>
      </Routes>
    </>
  );
}

export default App;
