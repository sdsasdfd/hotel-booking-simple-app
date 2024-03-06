import FeatureProperties from "../../components/FeatureProperties/FeatureProperties";
import Footer from "../../components/Footer/Footer";
import MailList from "../../components/MailList/MailList";
import Navbar from "../../components/Navbar/Navbar";
import PropertyList from "../../components/PropertyList/PropertyList";
import Features from "../../components/features/Features";
import Header from "../../components/header/Header";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Features />
        <h1 className="homeTilte">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeatureProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
