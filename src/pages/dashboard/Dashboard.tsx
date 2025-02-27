import Button from "../../ui/external/components/button/Button";
import Header from "../../ui/internal/components/header/Header";
import RecentItems from "../recentLostFound/RecentItems";
import SearchBar from "../search/SearchBar";
import "./dashboard.scss";

const Home = () => {
  return (
    <div>
      <Header />
      <div
        style={{ paddingTop: "100px" }}
        className="container-fluid hero-section"
      >
        <div className="container text-center text-dark  py-5">
          {/* Hero Section */}
          <h1 className="fw-bold display-5">
            Find What's Lost, Return What's Found – Effortlessly!
          </h1>
          <p className="fs-5 mt-3">
            Lost something? Found something? Our platform makes reporting and
            recovering lost items simple and hassle-free. Join us in creating a
            community-driven lost & found solution!
          </p>
          {/* Button Section */}
          {/* Lost, found and Join Community Section Button */}

          <Button />
        </div>
      </div>
      <SearchBar />
      <RecentItems />
    </div>
  );
};

export default Home;
