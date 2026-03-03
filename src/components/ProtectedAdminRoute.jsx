import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProtectedAdminRoute({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const getAdmin = async () => {
      try {
        const response = await axios.get(
          "https://bizz-mall-backend-production.up.railway.app/api/admin/me",
          {
            withCredentials: true,
          },
        );

        if (response.status === 200) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        setIsAuthenticated(false);
      }
    };

    getAdmin();
  }, []);

  if (isAuthenticated === null) return <p>Loading...</p>;

  if (!isAuthenticated) navigate("/admin/login");

  return children;
}
