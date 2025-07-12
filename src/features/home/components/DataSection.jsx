const DataSection = () => {
  return (
    <div className="data-section">
      <div className="data-section-holder">
        <div className="data-text-holder">
          <h2 className="data-title">Big data simplified</h2>
          <p className="data-text">
            No schema, no modeling, no configuration. Panoply utilizes machine
            learning and natural language processing (<span>nlp</span>) to
            learn, model and automate the standard data management activities
            preformed by data engineers, server developers and data scientists,
            saving thousands of code line and countless hours of debugging and
            research.
          </p>
        </div>
        <img
          src="/images/graphic-section-four.png"
          alt="graphic section four"
          className="data-section-img"
        />
      </div>
    </div>
  );
};

export default DataSection;
