import { useState } from "react";

const SearchBar = () => {
  const Items = [
    {
      id: 1,
      title: "Lost Wallet",
      category: "Wallet",
      location: "Kathmandu",
      date: "2025-02-20",
    },
    {
      id: 2,
      title: "Found Phone",
      category: "Phone",
      location: "Bhaktapur",
      date: "2025-02-19",
    },
    {
      id: 3,
      title: "Lost Ipad",
      category: "Electronics",
      location: "Sauraha",
      date: "2025-02-19",
    },
    {
      id: 4,
      title: "Found Camera",
      category: "Camera",
      location: "Bhaktapur",
      date: "2025-02-20",
    },
    {
      id: 5,
      title: "Lost Passport",
      category: "Document",
      location: "Kathmandu",
      date: "2025-02-18",
    },
    {
      id: 6,
      title: "Found Bag",
      category: "Bag",
      location: "Pokhara",
      date: "2025-02-18",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [searchDate, setSearchDate] = useState("");
  const [filterItems, setFilterItems] = useState(Items);

  // Function to filter results
  const filterResults = (term: string, location: string, date: string) => {
    const filtered = Items.filter((item) => {
      return (
        (term === "" ||
          item.title.toLowerCase().includes(term) ||
          item.category.toLowerCase().includes(term)) &&
        (location === "" || item.location.toLowerCase().includes(location)) &&
        (date === "" || item.date === date) // Filtering by exact date match
      );
    });
    setFilterItems(filtered);
  };

  // Handle Search Term
  const handleSearch = (e: any) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    filterResults(term, searchLocation, searchDate);
  };

  // Handle Location Filter
  const handleLocation = (e: any) => {
    const location = e.target.value.toLowerCase();
    setSearchLocation(location);
    filterResults(searchTerm, location, searchDate);
  };

  // Handle Date Filter
  const handleDateChange = (e: any) => {
    const date = e.target.value;
    setSearchDate(date);
    filterResults(searchTerm, searchLocation, date);
  };

  return (
    <div className="container mt-4">
      <div className="search-bar p-4 bg-light rounded shadow-lg">
        <h3 className="text-center fw-bold">🔍 Search Lost & Found Items</h3>
        <div className="row g-3 mt-3">
          {/* Search Input */}
          <div className="col-md-4">
            <input
              className="form-control"
              type="text"
              placeholder="Search by name or category..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          {/* Location Input */}
          <div className="col-md-4">
            <input
              className="form-control"
              type="text"
              placeholder="Enter Location..."
              value={searchLocation}
              onChange={handleLocation}
            />
          </div>
          {/* Date Input */}
          <div className="col-md-4">
            <input
              className="form-control"
              type="date"
              value={searchDate}
              onChange={handleDateChange}
            />
          </div>
        </div>
      </div>

      {/* Display Filtered Results */}
      <div className="mt-4">
        <h4 className="text-center">📌 Search Results</h4>
        <div
          className="card p-3 shadow-lg"
          style={{
            maxHeight: "250px",
            overflowY: filterItems.length > 3 ? "scroll" : "hidden",
          }}
        >
          <ul className="list-group">
            {filterItems.length > 0
              ? filterItems.map((item) => (
                  <li key={item.id} className="list-group-item">
                    <strong>{item.title}</strong> - {item.location} ({item.date}
                    )
                  </li>
                ))
              : Items.slice(0, 3).map((item) => (
                  <li
                    key={item.id}
                    className="list-group-item text-center text-danger"
                  >
                    <strong>{item.title}</strong> - {item.location} ({item.date}
                    )
                  </li>
                ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
