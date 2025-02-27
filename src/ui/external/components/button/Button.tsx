import "./Button.scss";
import { useNavigate } from "react-router-dom";
const Button = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="d-flex flex-column flex-md-row justify-content-center gap-3 mt-4">
        <button
          onClick={() => navigate("/Lost")}
          className="btn btn-primary px-4 py-2 fw-bold"
        >
          🔍 Report a Lost Item
        </button>
        <button
          onClick={() => navigate("/Found")}
          className="btn btn-success px-4 py-2 fw-bold"
        >
          📢 Report a Found Item
        </button>

        <a
          href="https://www.facebook.com/YOUR_FACEBOOK_PAGE_LINK"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-dark px-4 py-2 fw-bold"
        >
          👥 Join the Community
        </a>
      </div>
    </div>
  );
};

export default Button;
