import { useLocation } from "react-router-dom";
import Header from "../../ui/internal/components/header/Header";

const ItemDetails = () => {
  const { state: item } = useLocation();

  if (!item) {
    return <h2 className="text-center text-danger">Item not found</h2>;
  }

  return (
    <div>
      <Header />
      <div
        style={{ paddingTop: "70px" }}
        className="container mt-5 d-flex justify-content-center"
      >
        <div
          className="card shadow-lg p-4"
          style={{
            maxWidth: "800px",
            width: "100%",
            borderRadius: "15px",
          }}
        >
          <img
            className="card-img-top"
            src={item.image}
            alt={item.title}
            style={{
              width: "100%",
              height: "50vh",
              objectFit: "contain",
              borderTopLeftRadius: "15px",
              borderTopRightRadius: "15px",
            }}
          />
          <div className="card-body text-center">
            <h2 className="card-title fw-bold">{item.title}</h2>
            <p className="text-muted fs-5">
              📍 {item.location} | 📅 {new Date(item.date).toDateString()}
            </p>
            <p className="fs-4">
              Type: <strong className="text-uppercase">{item.type}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
