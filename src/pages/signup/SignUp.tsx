import { useState } from "react";
import Header from "../../ui/internal/components/header/Header";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    // Validation and regex
    if (!name) return setError("please enter your name.");
    if (!email) return setError("please enter your email");
    if (!password) return setError("please enter your password");
    if (password.length < 8)
      return setError("password must be at least 8 characters");
    if (password !== confirmPassword) return setError("Password doesnot match");
    //   Authentication which will be replaced with backend and API

    if (email === "test@example.com" && password === "password123") {
      setError("Email already in use!");
    } else {
      setSuccess("Signup Successful! Redirecting....");
      setTimeout(() => {
        window.location.href = "/Login";
      }, 2000);
    }
  };

  return (
    <div>
      <Header />
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div
          className="card p-5 shadow"
          style={{ width: "400px", borderRadius: "10px", background: "#fff" }}
        >
          <h2 className="text-center mb-4">Sign Up</h2>

          {error && <div className="alert alert-danger">{error}</div>}
          {success && <div className="alert alert-success">{success}</div>}

          {/* Form Section */}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label>Name</label>
              <input
                className="form-control"
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label>Email address</label>
              <input
                className="form-control"
                type="email"
                placeholder="Enter email to get started"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                className="form-control"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label>confirm Password</label>
              <input
                className="form-control"
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            {/* Sign up Button */}

            <button type="submit" className="btn btn-primary w-100">
              Sign up
            </button>
          </form>
          <div>
            <hr />
          </div>
          <div className="text-center mt-3">
            <p>Or sign up with</p>
            <button className="btn btn-outline-dark w-100 mb-2 d-flex align-items-center justify-content-center">
              <img
                className="me-2"
                src="https://img.icons8.com/color/20/000000/google-logo.png"
                alt="goolge"
              />
              Continue with Google
            </button>
            <button className="btn btn-outline-primary w-100 mb-2 d-flex align-items-center justify-content-center">
              <img
                className="me-2"
                src="https://img.icons8.com/color/20/000000/facebook-new.png"
                alt="facebook"
              />
              Continue with Facebook
            </button>
          </div>
          <div className="text-center mt-3">
            <p>
              Already have an account?{" "}
              <a style={{ textDecoration: "none" }} href="/Login">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
