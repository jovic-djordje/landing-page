import analyticsLogo from "/images/google-analytics-logo.png";
import amazonLogo from "/images/amazon-s3-logo.jpg";
import cloudLogo from "/images/cloud-upload-logo.webp";
import sqlLogo from "/images/postgresql-logo.png";
import zendeskLogo from "/images/zendesk-logo.jpg";
import mySqlLogo from "/images/mysql-logo.png";
import facebookAdsLogo from "/images/facebook-ads-logo.png";
import facebookLogo from "/images/Facebook-Logo.png";
import googleAdWordsLogo from "/images/google-adwords-logo.png";
import mongoLogo from "/images/MongoDB-Logo.png";
import mixPanelLogo from "/images/mixpanel-logo.png";
import salesForceLogo from "/images/Salesforce-Logo.png";
import mailChimpLogo from "/images/mailchimp-logo.png";
import stripeLogo from "/images/Stripe-Logo.png";
import panoplyLogo from "/images/Panoly_Logo_Grey.png";
import intercomLogo from "/images/intercom-logo.png";
import lookerLogo from "/images/looker-logo.png";
import tableauLogo from "/images/tableau-logo.png";
import chartioLogo from "/images/chartio-logo.png";
import metabaseLogo from "/images/metabase.png";
import dataBrickLogo from "/images/Databricks_logo.webp";
import redashLogo from "/images/redash_logo.webp";
import zeppelinLogo from "/images/zeppelin-logo.png";
import pytonLogo from "/images/python-logo.jpg";
import rstudioLogo from "/images/RStudio-Logo.png";
import sisenseLogo from "/images/sisense-logo.png";

const ToolsSection = () => {
  const toolsSectionCardsHolder = [
    {
      id: 1,
      imageUrl: (
        <img src={analyticsLogo} alt="google analytics" className="tools-img" />
      ),
      text: "google analytics",
    },
    {
      id: 2,
      imageUrl: <img src={amazonLogo} alt="amazon" className="tools-img" />,
      text: "amazon s3",
    },
    {
      id: 3,
      imageUrl: (
        <img src={cloudLogo} alt="cloud upload logo" className="tools-img" />
      ),
      text: "upload data",
    },
    {
      id: 4,
      imageUrl: <img src={sqlLogo} alt="postgre sql" className="tools-img" />,
      text: "PostgreSQL",
    },
    {
      id: 5,
      imageUrl: (
        <img src={zendeskLogo} alt="zendeks logo" className="tools-img" />
      ),
      text: "Zendesk",
    },
    {
      id: 6,
      imageUrl: <img src={mySqlLogo} alt="mysql" className="tools-img" />,
      text: "MySQL",
    },
    {
      id: 7,
      imageUrl: (
        <img src={facebookAdsLogo} alt="facebook ads" className="tools-img" />
      ),
      text: "Facebook ads",
    },
    {
      id: 8,
      imageUrl: <img src={facebookLogo} alt="facebook" className="tools-img" />,
      text: "facebook pages",
    },
    {
      id: 9,
      imageUrl: (
        <img
          src={googleAdWordsLogo}
          alt="google adwords"
          className="tools-img"
        />
      ),
      text: "Google adwords",
    },
    {
      id: 10,
      imageUrl: <img src={mongoLogo} alt="mongo logo" className="tools-img" />,
      text: "MongoDB",
    },
    {
      id: 11,
      imageUrl: (
        <img src={mixPanelLogo} alt="mixpanel logo" className="tools-img" />
      ),
      text: "MixPanel",
    },
    {
      id: 12,
      imageUrl: (
        <img src={salesForceLogo} alt="sales force" className="tools-img" />
      ),
      text: "SalesForce",
    },
    {
      id: 13,
      imageUrl: (
        <img src={mailChimpLogo} alt="mail chimp" className="tools-img" />
      ),
      text: "Mail chimp",
    },
    {
      id: 14,
      imageUrl: (
        <img src={stripeLogo} alt="stripe logo" className="tools-img" />
      ),
      text: "Stripe",
    },
    {
      id: 15,
      imageUrl: (
        <img src={panoplyLogo} alt="panoply logo" className="tools-img" />
      ),
      text: "Panoply SDK",
    },
    {
      id: 16,
      imageUrl: (
        <img src={intercomLogo} alt="intercom logo" className="tools-img" />
      ),
      text: "Intercom",
    },
  ];

  const toolsSecondSectionCardsHolder = [
    {
      id: 1,
      imageUrl: (
        <img src={lookerLogo} alt="looker logo" className="tools-img" />
      ),
      text: "Looker",
    },
    {
      id: 2,
      imageUrl: (
        <img src={tableauLogo} alt="tableau logo" className="tools-img" />
      ),
      text: "Tableau",
    },
    {
      id: 3,
      imageUrl: (
        <img src={chartioLogo} alt="chartio logo" className="tools-img" />
      ),
      text: "Chartio",
    },
    {
      id: 4,
      imageUrl: (
        <img src={metabaseLogo} alt="meatbase logo" className="tools-img" />
      ),
      text: "Metabase",
    },
    {
      id: 5,
      imageUrl: (
        <img src={dataBrickLogo} alt="databricks" className="tools-img" />
      ),
      text: "Data bricks",
    },
    {
      id: 6,
      imageUrl: (
        <img src={redashLogo} alt="redash logo" className="tools-img" />
      ),
      text: "Redash",
    },
    {
      id: 7,
      imageUrl: (
        <img src={zeppelinLogo} alt="zeppelin logo" className="tools-img" />
      ),
      text: "Zeppelin",
    },
    {
      id: 8,
      imageUrl: <img src={pytonLogo} alt="python logo" className="tools-img" />,
      text: "iPython notebook",
    },
    {
      id: 9,
      imageUrl: (
        <img src={rstudioLogo} alt="rstudio logo" className="tools-img" />
      ),
      text: "R-studio",
    },
    {
      id: 10,
      imageUrl: (
        <img src={sisenseLogo} alt="sisense logo" className="tools-img" />
      ),
      text: "Sisense",
    },
  ];

  return (
    <div className="tools-section">
      <div className="tools-section-holder">
        <div className="tool-section-up">
          <div className="tool-section-text-holder">
            <h2 className="tool-title">Any data. any scale.</h2>
            <p className="tool-text">
              With its <span>etl</span>-less integration pipeline. Panoply
              connects to all sorts of structured and semi-strucured data
              sources-absorbing billions of writes daily without a line of code,
              and allowing you to capture and process your data at lightning
              speed
            </p>
          </div>
          <div className="tools-cards-holder">
            {toolsSectionCardsHolder.map((toolCard) => (
              <div className="logo-holder" key={toolCard.id}>
                {toolCard.imageUrl}
                <p className="tool-card-text">{toolCard.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="tool-section-up bottom">
          <div className="tool-section-text-holder">
            <h2 className="tool-title">
              Connect <span>to the</span> tools you love
            </h2>
            <p className="tool-text">
              Panoply supports dozens of out-of-the-box integrations with
              popular big data and bi tools- from external apis and proprietary
              <span>sdk</span>s to tools like periscope,looker and r.
            </p>
          </div>
          <div className="tools-cards-holder">
            {toolsSecondSectionCardsHolder.map((toolCardBottom) => (
              <div className="logo-holder" key={toolCardBottom.id}>
                {toolCardBottom.imageUrl}
                <p className="tool-card-text">{toolCardBottom.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsSection;
