import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Recentitems = [
  {
    id: 1,
    title: "Black Wallet",
    location: "Kathmandu Mall",
    date: "2025-02-20",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5ZS4dTzNGF2GLB7jpt7lSVsMTtHl_u9MBA&s",
    type: "lost",
  },
  {
    id: 2,
    title: "Red Backpack",
    location: "New Road",
    date: "2025-02-18",
    image:
      "https://images-cdn.ubuy.co.id/64dc59607d007c53ff363c4a-jansport-unisex-superbreak-backpack.jpg",
    type: "found",
  },
  {
    id: 3,
    title: "iPhone 13",
    location: "Bhaktapur Bus Stop",
    date: "2025-02-17",
    image:
      "https://static-01.daraz.com.np/p/5147db9f5eeb1c85ea7ca07c7e03916b.jpg",
    type: "lost",
  },
  {
    id: 4,
    title: "Dell Laptop",
    location: "Patan Durbar Square",
    date: "2025-02-15",
    image:
      "https://cdn.mos.cms.futurecdn.net/Ajc3ezCTN4FGz2vF4LpQn9-1200-80.jpg",
    type: "found",
  },
  {
    id: 5,
    title: "Gold Ring",
    location: "Thamel",
    date: "2025-02-12",
    image:
      "https://static-01.daraz.com.np/p/a017bd02725a98cedc7cdad7c49a29f3.png",
    type: "lost",
  },
  {
    id: 6,
    title: "Samsung Phone",
    location: "Lagankhel",
    date: "2025-02-10",
    image:
      "https://images.samsung.com/is/image/samsung/assets/africa_en/2401/smartphones/galaxy-s24-ultra/specs/163x346_Titanium-Gray_Galaxy_S24_Ultra.jpg?$163_346_PNG$",
    type: "lost",
  },
  {
    id: 7,
    title: "Car Keys",
    location: "Pulchowk",
    date: "2025-02-05",
    image: "https://m.media-amazon.com/images/I/614HthA-v3L._AC_SL1001_.jpg",
    type: "found",
  },
  {
    id: 8,
    title: "Silver Chain",
    location: "Durbarmarg",
    date: "2025-02-02",
    image:
      "https://ronatelli.com/cdn/shop/files/Ronatelli_Cana_925_Sterling_Silver_Classic_Chain_Necklace_For_Men_3.jpg?v=1697131032&width=2048",
    type: "lost",
  },
];

const RecentItems = () => {
  const [visibleItems, setVisibleItems] = useState(3);
  const navigate = useNavigate();
  const handleViewMore = () => {
    setVisibleItems((prev) => prev + 3);
  };
  return (
    <div>
      <div style={{ paddingTop: "100px" }} className="container  mt-5 ">
        <h2 className="fw-bold text-center">🆕 Recently Reported Items</h2>
        <div className="row mt-4 justify-content-center gap-3  ">
          {Recentitems.slice(0, visibleItems)?.map((item) => (
            <div key={item.id} className="col-md-3">
              <div className="card shadow-lg">
                <img
                  style={{ objectFit: "contain" }}
                  className="card-img"
                  src={item.image}
                  alt={item.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">
                    📍 {item.location} <br />
                    📅 {new Date(item.date).toDateString()}
                  </p>
                  <button
                    className="btn btn-sm btn-primary w-100"
                    onClick={() =>
                      navigate(`/item/${item.id}`, { state: item })
                    }
                  >
                    View Detaile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {visibleItems < Recentitems.length && (
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
