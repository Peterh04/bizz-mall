import { Route, Routes } from "react-router-dom";
import "./App.css";
import ContactPage from "./pages/ContactPage.jsx";
import HomePage from "./pages/HomePage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/contact-us" element={<ContactPage />}></Route>
    </Routes>
  );
}

export default App;
