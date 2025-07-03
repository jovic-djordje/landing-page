import "./Home.style.css";

const Home = () => {
  return (
    <div className="home-section">
      <div className="home-section-holder">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/web-data-analysis-illustration-download-in-svg-png-gif-file-formats--analytics-logo-programming-graph-business-activities-pack-illustrations-5605335.png"
          alt="home section image"
          className="home-section-img"
        />
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
            <img
              src="https://images.otta.com/search/width_400/Y2FuZGlkYXRlLXByb2ZpbGUvY29tcGFueS1sb2dvcy84bk0wZnVnTWpSdll5eG8xMHNGV05zS2s0R1RnNjdpX3h4X0tQNzhsQmFVLnBuZw.png"
              alt="logo"
            />
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

export default Home;
