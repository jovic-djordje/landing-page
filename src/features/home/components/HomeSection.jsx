import { ConceptIllustration, GoDaddyLogo } from "../../../assets/images/";
import "../Home.style.css";

const HomeSection = () => {
  return (
    <div className="home-section">
      <div className="home-section-holder">
        <ConceptIllustration className="home-section-img" />
        <div className="home-section-text-holder">
          <h1 className="home-section-title">
            Transform your data into analytics in under 10 minutes
          </h1>
          <p className="home-section-text">
            Streamline and value for your data engineers,scientists and
            analytists using our cloud-base data warehouse platform.
          </p>
          <button className="home-section-btn">Watch 2-min demo video</button>
          <div className="testemonial">
            <GoDaddyLogo />
            <p className="director-words">
              "Panoply enables non technical people to get questions answered
              more easily" - Nissim, Director of Product
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
