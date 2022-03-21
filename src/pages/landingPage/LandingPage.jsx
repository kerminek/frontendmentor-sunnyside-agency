import Footer from "../../components/footer/Footer";
import Hello from "../../components/hello/Hello";
import Navbar from "../../components/navbar/Navbar";
import Pictures from "../../components/pictures/Pictures";
import PicturesBar from "../../components/picturesBar/PicturesBar";
import Testimonials from "../../components/testimonials/Testimonials";
import "./landingPage.scss";

const LandingPage = () => {
  return (
    <div className="landing">
      <Navbar />
      <Hello />
      <Pictures />
      <Testimonials />
      <PicturesBar />
      <Footer />
    </div>
  );
};

export default LandingPage;
