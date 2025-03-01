import { useState } from "react";
const items = [
  {
    id: 1,
    title: "Black Wallet",
    location: "Kathmandu Mall",
    date: "2025-02-20",
    image: "/wallet.jpg",
    type: "lost",
  },
  {
    id: 2,
    title: "Red Backpack",
    location: "New Road",
    date: "2025-02-18",
    image: "/backpack.jpg",
    type: "found",
  },
  {
    id: 3,
    title: "iPhone 13",
    location: "Bhaktapur Bus Stop",
    date: "2025-02-17",
    image: "/iphone.jpg",
    type: "lost",
  },
  {
    id: 4,
    title: "Dell Laptop",
    location: "Patan Durbar Square",
    date: "2025-02-15",
    image: "/laptop.jpg",
    type: "found",
  },
  {
    id: 5,
    title: "Gold Ring",
    location: "Thamel",
    date: "2025-02-12",
    image: "/ring.jpg",
    type: "lost",
  },
  {
    id: 6,
    title: "Samsung Phone",
    location: "Lagankhel",
    date: "2025-02-10",
    image: "/phone.jpg",
    type: "lost",
  },
  {
    id: 7,
    title: "Car Keys",
    location: "Pulchowk",
    date: "2025-02-05",
    image: "/keys.jpg",
    type: "found",
  },
  {
    id: 8,
    title: "Silver Chain",
    location: "Durbarmarg",
    date: "2025-02-02",
    image: "/chain.jpg",
    type: "lost",
  },
];

const RecentItems = () => {
  const [visibleItems, setVisibleItems] = useState(3);
  const handleViewMore = () => {
    setVisibleItems((prev) => prev + 3);
  };
  return (
    <div>
      <div className="container  mt-5 ">
        <h3 className="fw-bold text-center">🆕 Recently Reported Items</h3>
        <div className="row mt-4 justify-content-center gap-3  ">
          {items.slice(0, visibleItems)?.map((item) => (
            <div key={item.id} className="col-md-3">
              <div className="card shadow-lg">
                <img className="card-img" src={item.image} alt={item.title} />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">
                    📍 {item.location} <br />
                    📅 {new Date(item.date).toDateString()}
                  </p>
                  <button className="btn btn-sm btn-primary w-100">
                    View Detaile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {visibleItems < items.length && (
          <div className="text-center mt-4">
            <button
              className="btn btn-outline-primary px-4 mb-5"
              onClick={handleViewMore}
            >
              View More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentItems;
