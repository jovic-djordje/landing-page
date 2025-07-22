import { FaRegCopyright } from "react-icons/fa";
import { DemoSecLogo } from "../../../assets/images";

const DemoSection = () => {
  return (
    <>
      <div className="section-eight">
        <div className="section-eight-holder">
          <h2 className="section-eight-heading">
            From raw data to analysis in under 10 minutes
          </h2>
          <p className="section-eight-text">
            See how <span>panoply</span> can streamline your data processing now
          </p>
          <button className="home-section-btn">
            <a
              href="https://www.youtube.com/watch?v=WjwDSgBEQJc"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch 2-min demo video
            </a>
          </button>
        </div>
      </div>

      <div className="footer">
        <div className="footer-holder">
          <div className="footer-logo-holder">
            <DemoSecLogo className="footer-logo" />
            <p className="header-text">panoply</p>
          </div>
          <div className="footer-text">
            <div className="copyright">
              <FaRegCopyright className="footer-icon" />
              <p className="footer-copyright-text">
                Panoply <span>ltd.2018</span>
              </p>
            </div>
            <p className="privacy-terms">Terms &amp; conditions</p>
            <p className="privacy-terms">Privacy policy</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DemoSection;
