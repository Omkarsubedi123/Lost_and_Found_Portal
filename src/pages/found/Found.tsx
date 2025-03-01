import Header from "../../ui/internal/components/header/Header";
import { useState } from "react";
const ReportFound = () => {
  const [itemname, setItemName] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [contact, setContact] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  // Loading visualization adding
  const [loading, setLoading] = useState(false);
  // Regex Validation for Contact information.
  const phoneRegex = /^[0-9]{10}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    setTimeout(() => {});
    setError("");
    // Validation and regex
    if (!itemname) return setError("Please enter item name.");
    if (!category || category === "")
      return setError("Please select category.");
    if (!location) return setError("Please enter location.");
    if (!date) return setError("Please enter date.");
    if (!phoneRegex.test(contact) && !emailRegex.test(contact)) {
      return setError("Enter a valid phone number of email.");
    }
    if (!description) return setError("Please enter description.");
    // Authentication which will replace with Backend API
    setSuccess("Lost Item Reported Successfully!");
    setItemName("");
    setCategory("");
    setLocation("");
    setDate("");
    setContact("");
    setDescription("");
    setImage("");
    setTimeout(() => {
      // navigate("/");
    }, 1000);
  };
  const handleImageUpload = (e: any) => {
    const file = e.target.files[0];
    setImage(file);
  };
  return (
    <>
      <Header />
      <div>
        <div
          style={{ paddingTop: "80px" }}
          className="d-flex justify-content-center align-items-center vh-100"
        >
          <div style={{ width: "500px" }} className="card shadow-lg p-3">
            <h3 className="text-center mt-4 mb-4">📢 Report a Found Item</h3>
            <form onSubmit={handleSubmit} className="p-4">
              {/* Error and success handle */}
              {error && <div className="alert alert-danger">{error}</div>}

              {success && <div className="alert alert-success">{success}</div>}
              {/* Form Fields */}
              <div className="mb-3">
                <label>Item Name</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter lost item name."
                  value={itemname}
                  onChange={(e) => setItemName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label>Category</label>
                <select
                  className="form-select"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="" disabled selected>
                    Select Category
                  </option>
                  <option>Wallet</option>
                  <option>Mobile</option>
                  <option>Laptop</option>
                  <option>Documents</option>
                  <option>Others</option>
                </select>
              </div>
              <div className="mb-3">
                <label>Location</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter item location where it was found."
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label>Date Found</label>
                <input
                  type="date"
                  className="form-control"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label>Contact Information (Phone/Email)</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter the contact information of finder."
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label>Upload Image (Optional)</label>
                <input
                  className="form-control"
                  type="file"
                  accept="image/*"
                  // value={image}
                  onChange={handleImageUpload}
                />
              </div>
              <div className="mb-3">
                <label>Description</label>
                <textarea
                  className="form-control"
                  placeholder="Item description how and where the item was found"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              {/* Submit Button */}
              <button
                className="btn btn-primary w-100 shadow"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportFound;
