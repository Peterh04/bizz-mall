import { useState } from "react";
import AdminNavbar from "../../components/AdminNavbar";
import "../../styles/adminManageBusiness.css";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function AdminManageBusiness() {
  const navigate = useNavigate();
  const [business, setBusiness] = useState([]);
  const [isEdited, setIsEdited] = useState(false);
  const [form, setForm] = useState({
    title: "",
    description: "",
    highlights: "",
    price: "",
    is_featured: false,
    is_investment: false,
    coverImage: null,
  });

  const { id } = useParams();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const fetchBusiness = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3001/api/business/${id}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          },
        );
        setBusiness(data.business);

        setForm({
          title: data.business.title || "",
          description: data.business.description || "",
          highlights: data.business.highlights?.join("\n") || "",
          price: data.business.price || "",
          is_featured: data.business.is_featured || false,
          is_investment: data.business.is_investment || false,
        });
      } catch (error) {
        console.error(
          "Failed to fetch business",
          error.response?.data || error.message,
        );
      }
    };

    fetchBusiness();
  }, []);

  const handleEditForm = async (e) => {
    e.preventDefault();

    const accessToken = localStorage.getItem("accessToken");

    const formData = new FormData();

    formData.append("title", form.title);
    formData.append("description", form.description);

    const highlightsArray = form.highlights
      .split("\n")
      .map((item) => item.trim())
      .filter((item) => item !== "");

    formData.append("highlights", JSON.stringify(highlightsArray));
    formData.append("price", form.price);
    formData.append("is_featured", form.is_featured);
    formData.append("is_investment", form.is_investment);

    if (form.coverImage) {
      formData.append("coverImage", form.coverImage);
    }

    try {
      await axios.patch(`http://localhost:3001/api/business/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      navigate("/admin/manage-businesses");
    } catch (error) {
      console.error(
        "Failed to edit post",
        error.response?.data || error.message,
      );
    }
  };
  return (
    <main className="manage-business-page" aria-label="manage businesss page">
      <AdminNavbar />

      <section className="edit-business" aria-label="edit business">
        <form
          className="contact-form"
          aria-label="contact form"
          onSubmit={handleEditForm}
        >
          <h2>Edit business post</h2>
          <div
            className="form-input-conntainer"
            aria-label="form input conntainer"
          >
            <label htmlFor="business-title">Title</label>
            <input
              type="text"
              id="business-title"
              required
              value={form.title}
              onChange={(e) => {
                setIsEdited(true);
                setForm({ ...form, title: e.target.value });
              }}
            />
          </div>

          <div
            className="form-input-conntainer"
            aria-label="form input conntainer"
          >
            <label htmlFor="business-description">Description</label>
            <textarea
              type="text"
              id="business-description"
              required
              value={form.description}
              onChange={(e) => {
                setIsEdited(true);
                setForm({ ...form, description: e.target.value });
              }}
            />
          </div>

          <div
            className="form-input-conntainer"
            aria-label="form input conntainer"
          >
            <label htmlFor="business-highlights">Highlights</label>
            <textarea
              type="text"
              id="business-highlights"
              required
              value={form.highlights}
              onChange={(e) => {
                setIsEdited(true);
                setForm({ ...form, highlights: e.target.value });
              }}
            />
          </div>

          <div
            className="form-input-conntainer"
            aria-label="form input conntainer"
          >
            <label htmlFor="business-price">Price</label>
            <input
              type="number"
              id="business-price"
              required
              value={form.price}
              onChange={(e) => {
                setIsEdited(true);
                setForm({ ...form, price: e.target.value });
              }}
            />
          </div>

          <div
            className="form-input-conntainer"
            aria-label="form input conntainer"
          >
            <label htmlFor="business-photo">Cover Photo</label>
            <input
              type="file"
              id="business-photo"
              accept="image/*"
              onChange={(e) => {
                setIsEdited(true);
                const file = e.target.files[0];
                if (file) {
                  setForm({ ...form, coverImage: file });
                }
              }}
            />
          </div>
          <div className="form-input-container">
            <label className="label">
              <input
                type="checkbox"
                checked={form.is_featured}
                onChange={(e) => {
                  setIsEdited(true);
                  setForm({ ...form, is_featured: e.target.checked });
                }}
              />
              Featured Business
            </label>
          </div>

          <div className="form-input-container">
            <label className="label">
              <input
                type="checkbox"
                checked={form.is_investment}
                onChange={(e) => {
                  setIsEdited(true);
                  setForm({ ...form, is_investment: e.target.checked });
                }}
              />
              Investment Opportunity
            </label>
          </div>

          {form.title !== business.title ||
          form.description !== business.description ||
          form.highlights !== business.highlights.join("\n") ||
          form.price !== business.price ||
          form.is_featured !== business.is_featured ||
          form.is_investment !== business.is_investment ? (
            <button> Edit POST</button>
          ) : (
            <button disabled className="disable">
              Edit POST
            </button>
          )}
        </form>
      </section>
    </main>
  );
}
