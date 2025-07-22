import { FaDatabase } from "react-icons/fa";
import { BsDatabaseFillUp } from "react-icons/bs";
import { BsClipboard2Data } from "react-icons/bs";
import { SiGoogledataproc } from "react-icons/si";
import { FaQuoteLeft } from "react-icons/fa";
import {
  Factual,
  Firefly,
  InVision,
  Kimberly,
  MotoSport,
  Snc,
  YoungManAirport,
} from "../../../assets/images";

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
      imageUrl: <MotoSport />,
    },
    {
      id: 2,
      imageUrl: <Factual />,
    },
    {
      id: 3,
      imageUrl: <InVision />,
    },
    {
      id: 4,
      imageUrl: <Kimberly />,
    },
    {
      id: 5,
      imageUrl: <Firefly />,
    },
    {
      id: 6,
      imageUrl: <Snc />,
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
            <YoungManAirport className="section-seven-img" />
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
            <img
              src={pricingImage.imageUrl}
              className="img"
              key={pricingImage.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
