import axios from "axios";
import AdminNavbar from "../../components/AdminNavbar";
import Business from "../../components/Business.jsx";
import "../../styles/adminManagePage.css";
import { useEffect, useState } from "react";

export default function AdminFeaturedPage() {
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    const fetchFeaturedBusinesses = async () => {
      try {
        const { data } = await axios.get(
          "https://bizz-mall-backend-production.up.railway.app/api/business?is_featured=true",
          {
            withCredentials: true,
          },
        );

        setBusinesses(data.businesses);
      } catch (error) {
        console.error(
          "Failed to fetch featured businesses",
          error.response?.data || error.message,
        );
      }
    };
    fetchFeaturedBusinesses();
  }, []);
  return (
    <main className="admin-manage-page" aria-label="admin manage page">
      <AdminNavbar />

      <div
        className="business-preview-container"
        aria-label="business preview container"
      >
        {businesses.length == 0 ? (
          <p>No featured bussinesses.</p>
        ) : (
          businesses.map((business) => (
            <Business
              title={business.title}
              description={business.description}
              key={business.business_id}
              coverImageSrc={business.coverImage}
              id={Number(business.business_id)}
            />
          ))
        )}
      </div>
    </main>
  );
}
