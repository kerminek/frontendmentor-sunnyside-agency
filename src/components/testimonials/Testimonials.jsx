import "./testimonials.scss";
import emilyImage from "../../images/image-emily.jpg";
import thomasImage from "../../images/image-thomas.jpg";
import jennieImage from "../../images/image-jennie.jpg";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h3>CLIENT TESTIMONIALS</h3>
      <div className="testimonialsContainer">
        <div className="testimonial">
          <div className="imageContainer">
            <img src={emilyImage} alt="" />
          </div>
          <div className="textContainer">
            <p>
              We put trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always
              hit.
            </p>
          </div>
          <div className="nameAndTitle">
            <span>Emily R.</span>
            <p>Marketing Director</p>
          </div>
        </div>
        <div className="testimonial">
          <div className="imageContainer">
            <img src={thomasImage} alt="" />
          </div>
          <div className="textContainer">
            <p>
              Sunnyside's enthusiasm coupled with theri keen interest in our brand's success made it a satisfying and
              enjoyable experience.
            </p>
          </div>
          <div className="nameAndTitle">
            <span>Thomas S.</span>
            <p>Chief Operating Officer</p>
          </div>
        </div>
        <div className="testimonial">
          <div className="imageContainer">
            <img src={jennieImage} alt="" />
          </div>
          <div className="textContainer">
            <p>
              Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
            </p>
          </div>
          <div className="nameAndTitle">
            <span>Jennie F.</span>
            <p>Business Owner</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
