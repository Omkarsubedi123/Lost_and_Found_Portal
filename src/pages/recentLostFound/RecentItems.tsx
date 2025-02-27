// import { useState } from "react";
const items = [
  {
    id: 1,
    title: "Black Wallet",
    location: "Kathmandu Mall",
    date: "Feb 20, 2025",
    image: "/wallet.jpg",
    type: "lost",
  },
  {
    id: 2,
    title: "Red Backpack",
    location: "New Road",
    date: "Feb 18, 2025",
    image: "/backpack.jpg",
    type: "found",
  },
  {
    id: 3,
    title: "iPhone 13",
    location: "Bhaktapur Bus Stop",
    date: "Feb 17, 2025",
    image: "/iphone.jpg",
    type: "lost",
  },
];

const RecentItems = () => {
  return (
    <div>
      <div className="container mt-5">
        <h3 className="fw-bold text-center">🆕 Recently Reported Items</h3>
        <div className="row mt-4">
          {items?.map((item) => (
            <div key={item.id} className="col-md-4">
              <div className="card shadow-lg">
                <img className="card-img" src={item.image} alt={item.title} />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">
                    📍 {item.location} <br />
                    📅 {item.date}
                  </p>
                  <button className="btn btn-sm btn-primary w-100">
                    View Detaile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <button className="btn btn-outline-primary px-4 mb-5">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentItems;
