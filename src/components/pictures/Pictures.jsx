import "./pictures.scss";

const Pictures = () => {
  return (
    <div className="pictures">
      <div className="bigContainer">
        <div className="smallContainer">
          <div className="desc">
            <h2>Transform your brand</h2>
            <p>
              We are a full-service creative agency specializing in helping brands grow fast. Engage your clients
              through compelling visuals that do most of the marketing for you.
            </p>
            <div className="learnMore">
              <span>LEARN MORE</span>
              <div className="underline yellow" />
            </div>
          </div>
        </div>
        <div className="smallContainer egg" />
      </div>
      <div className="bigContainer">
        <div className="smallContainer">
          <div className="desc">
            <h2>Stand out to the right audience</h2>
            <p>
              Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters,
              we'll build and extend your brand in digital places.
            </p>
            <div className="learnMore">
              <span>LEARN MORE</span>
              <div className="underline red" />
            </div>
          </div>
        </div>
        <div className="smallContainer drink" />
      </div>
      <div className="bigContainer">
        <div className="smallContainer cherries">
          <div className="fruitDesc">
            <h3>Graphic Design</h3>
            <p>
              Great design makes your memorable. We deliver artwork that underscores your brand message and captures
              potential clients' attention.
            </p>
          </div>
        </div>
        <div className="smallContainer orange">
          <div className="fruitDesc">
            <h3>Photography</h3>
            <p>
              Increase your credibility by getting the most stunning, high-quality photos that improve your business
              image.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pictures;
