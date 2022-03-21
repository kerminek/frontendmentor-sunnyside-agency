import "./footer.scss";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { ReactComponent as FacebookIcon } from "../../images/icon-facebook.svg";
import { ReactComponent as InstagramIcon } from "../../images/icon-instagram.svg";
import { ReactComponent as TwitterIcon } from "../../images/icon-twitter.svg";
import { ReactComponent as PinterestIcon } from "../../images/icon-pinterest.svg";

const Footer = () => {
  return (
    <div className="footer">
      <Logo className="logo" />
      <div className="links">
        <div className="link">About</div>
        <div className="link">Services</div>
        <div className="link">Projects</div>
      </div>
      <div className="socialMedias">
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
        <PinterestIcon />
      </div>
    </div>
  );
};

export default Footer;
