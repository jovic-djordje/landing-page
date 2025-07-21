import { FaDatabase } from "react-icons/fa";
import { BsDatabaseFillUp } from "react-icons/bs";
import { BsClipboard2Data } from "react-icons/bs";
import { SiGoogledataproc } from "react-icons/si";
import { FaQuoteLeft } from "react-icons/fa";
import youngManAtAirport from "/images/young-man-using-laptop-airport.avif";

const PricingSection = () => {
  const pricingCardArray = [
    {
      id: 1,
      title: "Starter",
      imageUrl: <FaDatabase className="pricing-card-img" />,
      price: "$249/mo",
      description:
        "25+ million rows up to 12.5 gb of storage unlimited queries 1 user",
    },
    {
      id: 2,
      title: "Pro",
      imageUrl: <BsDatabaseFillUp className="pricing-card-img" />,
      price: "$499/mo",
      description:
        "100+ million rows up to 50 gb of storage unlimited queries 3 users",
    },
    {
      id: 3,
      title: "Business",
      imageUrl: <BsClipboard2Data className="pricing-card-img" />,
      price: "$749/mo ",
      description:
        " 200+ million rows up to 100 gb of storage unlimited queries 5 users",
    },
    {
      id: 4,
      title: "Enterprise",
      imageUrl: <SiGoogledataproc className="pricing-card-img" />,
      price: "Custom",
      description:
        "Any of # rows Elastic storage unlimited queries unlimited users",
    },
  ];

  const pricingSectionImages = [
    {
      id: 1,
      imageUrl: "https://euid.eu/img/partners/motorsport_network_logo.png",
    },
    {
      id: 2,
      imageUrl: "https://logodix.com/logo/2122297.png",
    },
    {
      id: 3,
      imageUrl:
        "https://tse2.mm.bing.net/th/id/OIP.KTzLl5L0L6qEg-XfLDPE8gHaCe?r=0&cb=thvnext&w=960&h=321&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      id: 4,
      imageUrl: "https://logonoid.com/images/kimberly-clark-logo.png",
    },
    {
      id: 5,
      imageUrl:
        "https://wallpapers.com/images/hd/firefly-logo-graphic-drr8auk8llwdj0hc.jpg",
    },
    {
      id: 6,
      imageUrl:
        "https://snc.wd1.myworkdayjobs.com/wday/cxs/snc/SNC_External_Career_Site/sidebarimage/57dea109fbe11001a57f8cfd66a50000",
    },
  ];

  return (
    <div className="pricing-section">
      <div className="pricing-section-holder">
        <div className="pricing-section-header-holder">
          <h2 className="pricing-title">Simple and transparent pricing</h2>
          <p>All plans have 21-day free trial.No credit card required.</p>
        </div>

        <div className="pricing-section-card-holder">
          {pricingCardArray.map((pricingCard) => (
            <div className="pricing-card" key={pricingCard.id}>
              <div className="pricing-card-width-holder">
                <h3 className="card-title">{pricingCard.title}</h3>
                {pricingCard.imageUrl}
                <p className="pricing-card-price">{pricingCard.price}</p>
                <p className="pricing-card-text">{pricingCard.description}</p>
                <button className="pricing-card-btn">Start free trial</button>
              </div>
            </div>
          ))}
        </div>

        <div className="section-seven-survey">
          <div className="section-seven-blur-image"></div>
          <div className="section-seven-survey-width-holder">
            <img
              src={youngManAtAirport}
              alt="young man at airport"
              className="section-seven-img"
            />
            <div className="section-seven-survey-text-holder">
              <div className="section-seven-survey-comment">
                <FaQuoteLeft className="quote-icon-section-seven" />

                <p className="survey-text">
                  Setup took literally minutes and presto! We got a fully
                  automated data warehouse with our product and marketing data.
                </p>
              </div>
              <div className="section-seven-survey-user-info">
                <p className="section-seven-user-name">Ami foldenberg</p>
                <p className="section-seven-user-profession">
                  Co-<span>founder</span> and
                  <span className="uppercase-span"> cto</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="section-two-holder">
          {pricingSectionImages.map((pricingImage) => (
            <img src={pricingImage.imageUrl} className="img" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
