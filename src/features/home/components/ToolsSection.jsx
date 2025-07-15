const ToolsSection = () => {
  const toolsSectionCardsHolder = [
    {
      id: 1,
      imageUrl: (
        <img
          src="/images/google-analytics-logo.png"
          alt="google analytics"
          className="tools-img"
        />
      ),
      text: "google analytics",
    },
    {
      id: 2,
      imageUrl: (
        <img
          src="/images/amazon-s3-logo.jpg"
          alt="amazon"
          className="tools-img"
        />
      ),
      text: "amazon s3",
    },
    {
      id: 3,
      imageUrl: (
        <img
          src="/images/cloud-upload-logo.webp"
          alt="cloud upload logo"
          className="tools-img"
        />
      ),
      text: "upload data",
    },
    {
      id: 4,
      imageUrl: (
        <img
          src="/images/postgresql-logo.png"
          alt="postgre sql"
          className="tools-img"
        />
      ),
      text: "PostgreSQL",
    },
    {
      id: 5,
      imageUrl: (
        <img
          src="/images/zendesk-logo.jpg"
          alt="zendeks logo"
          className="tools-img"
        />
      ),
      text: "Zendesk",
    },
    {
      id: 6,
      imageUrl: (
        <img src="/images/mysql-logo.png" alt="mysql" className="tools-img" />
      ),
      text: "MySQL",
    },
    {
      id: 7,
      imageUrl: (
        <img
          src="/images/facebook-ads-logo.png"
          alt="facebook ads"
          className="tools-img"
        />
      ),
      text: "Facebook ads",
    },
    {
      id: 8,
      imageUrl: (
        <img
          src="/images/Facebook-Logo.png"
          alt="facebook"
          className="tools-img"
        />
      ),
      text: "facebook pages",
    },
    {
      id: 9,
      imageUrl: (
        <img
          src="/images/google-adwords-logo.png"
          alt="google adwords"
          className="tools-img"
        />
      ),
      text: "Google adwords",
    },
    {
      id: 10,
      imageUrl: (
        <img
          src="/images/MongoDB-Logo.png"
          alt="mongo logo"
          className="tools-img"
        />
      ),
      text: "MongoDB",
    },
    {
      id: 11,
      imageUrl: (
        <img
          src="/images/mixpanel-logo.png"
          alt="mixpanel logo"
          className="tools-img"
        />
      ),
      text: "MixPanel",
    },
    {
      id: 12,
      imageUrl: (
        <img
          src="/images/Salesforce-Logo.png"
          alt="sales force"
          className="tools-img"
        />
      ),
      text: "SalesForce",
    },
    {
      id: 13,
      imageUrl: (
        <img
          src="/images/mailchimp-logo.png"
          alt="mail chimp"
          className="tools-img"
        />
      ),
      text: "Mail chimp",
    },
    {
      id: 14,
      imageUrl: (
        <img
          src="/images/Stripe-Logo.png"
          alt="stripe logo"
          className="tools-img"
        />
      ),
      text: "Stripe",
    },
    {
      id: 15,
      imageUrl: (
        <img
          src="/images/Panoly_Logo_Grey.png"
          alt="panoply logo"
          className="tools-img"
        />
      ),
      text: "Panoply SDK",
    },
    {
      id: 16,
      imageUrl: (
        <img
          src="/images/intercom-logo.png"
          alt="intercom logo"
          className="tools-img"
        />
      ),
      text: "Intercom",
    },
  ];

  const toolsSecondSectionCardsHolder = [
    {
      id: 1,
      imageUrl: (
        <img
          src="/images/looker-logo.png"
          alt="looker logo"
          className="tools-img"
        />
      ),
      text: "Looker",
    },
    {
      id: 2,
      imageUrl: (
        <img
          src="/images/tableau-logo.png"
          alt="tableau logo"
          className="tools-img"
        />
      ),
      text: "Tableau",
    },
    {
      id: 3,
      imageUrl: (
        <img
          src="/images/chartio-logo.png"
          alt="chartio logo"
          className="tools-img"
        />
      ),
      text: "Chartio",
    },
    {
      id: 4,
      imageUrl: (
        <img
          src="/images/metabase.png"
          alt="meatbase logo"
          className="tools-img"
        />
      ),
      text: "Metabase",
    },
    {
      id: 5,
      imageUrl: (
        <img
          src="/images/Databricks_logo.webp"
          alt="databricks"
          className="tools-img"
        />
      ),
      text: "Data bricks",
    },
    {
      id: 6,
      imageUrl: (
        <img
          src="/images/redash_logo.webp"
          alt="redash logo"
          className="tools-img"
        />
      ),
      text: "Redash",
    },
    {
      id: 7,
      imageUrl: (
        <img
          src="/images/zeppelin-logo.png"
          alt="zeppelin logo"
          className="tools-img"
        />
      ),
      text: "Zeppelin",
    },
    {
      id: 8,
      imageUrl: (
        <img
          src="/images/python-logo.jpg"
          alt="python logo"
          className="tools-img"
        />
      ),
      text: "iPython notebook",
    },
    {
      id: 9,
      imageUrl: (
        <img
          src="/images/RStudio-Logo.png"
          alt="rstudio logo"
          className="tools-img"
        />
      ),
      text: "R-studio",
    },
    {
      id: 10,
      imageUrl: (
        <img
          src="/images/sisense-logo.png"
          alt="sisense logo"
          className="tools-img"
        />
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
