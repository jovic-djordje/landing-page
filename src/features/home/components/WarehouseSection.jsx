import { SectionFiveImg } from "../../../assets/images";

const WarehouseSection = () => {
  return (
    <div className="warehouse-section">
      <div className="warehouse-section-holder">
        <h2 className="warehouse-title">The world's easiest data warehouse</h2>
        <SectionFiveImg className="warehouse-img" />
        <div className="warehouse-btn-holder">
          <button className="warehouse-btn">any data</button>
          <button className="warehouse-btn">smart data warehouse</button>
          <button className="warehouse-btn">any visualization tool</button>
        </div>
      </div>
    </div>
  );
};

export default WarehouseSection;
