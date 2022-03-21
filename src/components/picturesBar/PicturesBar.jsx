import "./picturesBar.scss";
import milkPicture from "../../images/desktop/image-gallery-milkbottles.jpg";
import orangePicture from "../../images/desktop/image-gallery-orange.jpg";
import conePicture from "../../images/desktop/image-gallery-cone.jpg";
import sugarcubesPicture from "../../images/desktop/image-gallery-sugarcubes.jpg";
// Mobile
import milkPictureMobile from "../../images/mobile/image-gallery-milkbottles.jpg";
import orangePictureMobile from "../../images/mobile/image-gallery-orange.jpg";
import conePictureMobile from "../../images/mobile/image-gallery-cone.jpg";
import sugarcubesPictureMobile from "../../images/mobile/image-gallery-sugarcubes.jpg";

const PicturesBar = () => {
  return (
    <div className="picturesBar">
      <div className="pictureContainer">
        <img src={milkPicture} alt="" className="desktop" />
        <img src={milkPictureMobile} alt="" className="mobile" />
      </div>
      <div className="pictureContainer">
        <img src={orangePicture} alt="" className="desktop" />
        <img src={orangePictureMobile} alt="" className="mobile" />
      </div>
      <div className="pictureContainer">
        <img src={conePicture} alt="" className="desktop" />
        <img src={conePictureMobile} alt="" className="mobile" />
      </div>
      <div className="pictureContainer">
        <img src={sugarcubesPicture} alt="" className="desktop" />
        <img src={sugarcubesPictureMobile} alt="" className="mobile" />
      </div>
    </div>
  );
};

export default PicturesBar;
