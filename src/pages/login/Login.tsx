import { useState } from "react";
import Header from "../../ui/internal/components/header/Header";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e: any) => {
    e.preventDefault();

    //   Validation and regex
    if (!email || !password) {
      setError("Both fields are required!");
      return;
    }

    // Authentication which will replace with Backend API
    if (email == "test@example.com" && password == "password123") {
      alert("Login Successful!");
      navigate("/");
    } else {
      setError("Invalid Email or Password!!!");
    }
  };
  return (
    <div>
      <Header />
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4 shadow" style={{ width: "350px" }}>
          <h3 className="text-center mb-4">Login</h3>

          {error && <div className="alert alert-danger">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {/* Login Button */}
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </form>
          {/* Signup redirect */}
          <div className="text-center mt-3">
            <p>
              Don't have an account? <a herf="/signUp">SignUp</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
