import { Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Nav />
          <Route path="/" element={<Home></Home>} />
          <Route path="about" element={<h1>About</h1>} />
          <Route path="dashboard" element={<h1>Dashboard</h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
