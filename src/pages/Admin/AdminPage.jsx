import { useState } from "react";
import axios from "axios";
import AdminNavbar from "../../components/AdminNavbar.jsx";
import "../../styles/adminPage.css";
import { useNavigate } from "react-router-dom";

export default function AdminPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    description: "",
    highlights: "",
    price: "",
    coverImage: null,
    is_featured: false,
    is_investment: false,
  });
  const [loading, setLoading] = useState(false);
  const handleForm = async (e) => {
    e.preventDefault();
    setLoading(true);

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
    formData.append("is_featured", form.is_featured);
    formData.append("is_investment", form.is_investment);
    try {
      const { data } = await axios.post(
        "http://localhost:3001/api/business",
        formData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      setForm({
        title: "",
        description: "",
        highlights: "",
        price: "",
        picture: null,
      });
      navigate("/admin");
    } catch (error) {
      console.error(
        "Failed to create business post",
        error.response?.data || error.message,
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className="admin-page" aria-label="admin-page">
      <AdminNavbar />

      <section className="create-business" aria-label="create business">
        <form
          action=""
          className="contact-form"
          aria-label="contact form"
          onSubmit={handleForm}
        >
          <h2>Create a business post</h2>
          <div
            className="form-input-conntainer"
            aria-label="form input conntainer"
          >
            <label htmlFor="business-title">Title</label>
            <input
              type="text"
              id="business-title"
              value={form.title}
              required
              onChange={(e) => setForm({ ...form, title: e.target.value })}
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
              value={form.description}
              required
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
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
              value={form.highlights}
              required
              onChange={(e) => setForm({ ...form, highlights: e.target.value })}
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
              value={form.price}
              required
              onChange={(e) => setForm({ ...form, price: e.target.value })}
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
              required
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  setForm({ ...form, coverImage: file });
                }
              }}
            />
            <div className="image-container">
              {form.coverImage && (
                <img src={URL.createObjectURL(form.coverImage)} alt="preview" />
              )}
            </div>
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Uploading..." : "CREATE POST"}
          </button>
        </form>
      </section>
    </main>
  );
}
