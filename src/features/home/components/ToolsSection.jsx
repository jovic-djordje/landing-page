import {
  AmazonLogo,
  AnaliyticsLogo,
  Chartio,
  CloudLogo,
  DataBricks,
  FacebookAdsLogo,
  FacebookLogo,
  GoogleAdWords,
  Intercom,
  Looker,
  MailChimp,
  MetaBase,
  MixPanel,
  MongoLogo,
  MySqlLogo,
  Panoply,
  Pyton,
  Redash,
  Rstudio,
  SalesForce,
  Sisense,
  SqlLogo,
  Stripe,
  Tableau,
  ZendeskLogo,
  Zeppelin,
} from "../../../assets/images";

const ToolsSection = () => {
  const toolsSectionCardsHolder = [
    {
      id: 1,
      imageUrl: <AnaliyticsLogo className="tools-img" />,
      text: "google analytics",
    },
    {
      id: 2,
      imageUrl: <AmazonLogo className="tools-img" />,
      text: "amazon s3",
    },
    {
      id: 3,
      imageUrl: <CloudLogo className="tools-img" />,
      text: "upload data",
    },
    {
      id: 4,
      imageUrl: <SqlLogo className="tools-img" />,
      text: "PostgreSQL",
    },
    {
      id: 5,
      imageUrl: <ZendeskLogo className="tools-img" />,
      text: "Zendesk",
    },
    {
      id: 6,
      imageUrl: <MySqlLogo className="tools-img" />,
      text: "MySQL",
    },
    {
      id: 7,
      imageUrl: <FacebookAdsLogo className="tools-img" />,
      text: "Facebook ads",
    },
    {
      id: 8,
      imageUrl: <FacebookLogo className="tools-img" />,
      text: "facebook pages",
    },
    {
      id: 9,
      imageUrl: <GoogleAdWords className="tools-img" />,
      text: "Google adwords",
    },
    {
      id: 10,
      imageUrl: <MongoLogo className="tools-img" />,
      text: "MongoDB",
    },
    {
      id: 11,
      imageUrl: <MixPanel className="tools-img" />,
      text: "MixPanel",
    },
    {
      id: 12,
      imageUrl: <SalesForce className="tools-img" />,
      text: "SalesForce",
    },
    {
      id: 13,
      imageUrl: <MailChimp className="tools-img" />,
      text: "Mail chimp",
    },
    {
      id: 14,
      imageUrl: <Stripe className="tools-img" />,
      text: "Stripe",
    },
    {
      id: 15,
      imageUrl: <Panoply className="tools-img" />,
      text: "Panoply SDK",
    },
    {
      id: 16,
      imageUrl: <Intercom className="tools-img" />,
      text: "Intercom",
    },
  ];

  const toolsSecondSectionCardsHolder = [
    {
      id: 1,
      imageUrl: <Looker className="tools-img" />,
      text: "Looker",
    },
    {
      id: 2,
      imageUrl: <Tableau className="tools-img" />,
      text: "Tableau",
    },
    {
      id: 3,
      imageUrl: <Chartio className="tools-img" />,
      text: "Chartio",
    },
    {
      id: 4,
      imageUrl: <MetaBase className="tools-img" />,
      text: "Metabase",
    },
    {
      id: 5,
      imageUrl: <DataBricks className="tools-img" />,
      text: "Data bricks",
    },
    {
      id: 6,
      imageUrl: <Redash className="tools-img" />,
      text: "Redash",
    },
    {
      id: 7,
      imageUrl: <Zeppelin className="tools-img" />,
      text: "Zeppelin",
    },
    {
      id: 8,
      imageUrl: <Pyton className="tools-img" />,
      text: "iPython notebook",
    },
    {
      id: 9,
      imageUrl: <Rstudio className="tools-img" />,
      text: "R-studio",
    },
    {
      id: 10,
      imageUrl: <Sisense className="tools-img" />,
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
