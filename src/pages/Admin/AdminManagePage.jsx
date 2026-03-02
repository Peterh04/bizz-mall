import axios from "axios";
import AdminNavbar from "../../components/AdminNavbar";
import Business from "../../components/Business.jsx";
import "../../styles/adminManagePage.css";
import { useEffect, useState } from "react";

export default function AdminManagePage() {
  const [businesses, setBusinesses] = useState([]);

  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/api/business", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setBusinesses(data.businesses);
      } catch (error) {
        console.error(
          "Failed to fetch businesses",
          error.response?.data || error.message,
        );
      }
    };

    fetchBusinesses();
  }, []);
  return (
    <main className="admin-manage-page" aria-label="admin manage page">
      <AdminNavbar />

      <div
        className="business-preview-container"
        aria-label="business preview container"
      >
        {businesses.map((business) => (
          <Business
            title={business.title}
            description={business.description}
            key={business.business_id}
            coverImageSrc={business.coverImage}
            id={Number(business.business_id)}
          />
        ))}
      </div>
    </main>
  );
}
