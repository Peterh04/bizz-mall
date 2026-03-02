import { Route, Routes } from "react-router-dom";
import "./App.css";
import ContactPage from "./pages/ContactPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import AdminLoginPage from "./pages/Admin/AdminLoginPage.jsx";
import AdminPage from "./pages/Admin/AdminPage.jsx";
import AdminManagePage from "./pages/Admin/AdminManagePage.jsx";
import AdminManageBusiness from "./pages/Admin/AdminManageBusiness.jsx";
import AdminFeaturedPage from "./pages/Admin/AdminFeaturedPage.jsx";
import AdminInvestmentsPage from "./pages/Admin/AdminInvestments.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/contact-us" element={<ContactPage />}></Route>
      <Route path="/admin/login" element={<AdminLoginPage />}></Route>
      <Route path="/admin" element={<AdminPage />}></Route>
      <Route
        path="/admin/manage-businesses"
        element={<AdminManagePage />}
      ></Route>
      <Route
        path="/admin/manage-businesses/:id"
        element={<AdminManageBusiness />}
      />
      <Route path="/admin/feature" element={<AdminFeaturedPage />}></Route>
      <Route
        path="/admin/investments"
        element={<AdminInvestmentsPage />}
      ></Route>
    </Routes>
  );
}

export default App;
