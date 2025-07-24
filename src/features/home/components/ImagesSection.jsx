import {
  Factual,
  Firefly,
  InVision,
  Kimberly,
  MotoSport,
  Snc,
} from "../../../assets/images";

const ImagesSection = () => {
  const images = [
    {
      id: 1,
      Component: MotoSport,
    },
    {
      id: 2,
      Component: Factual,
    },
    {
      id: 3,
      Component: InVision,
    },
    {
      id: 4,
      Component: Kimberly,
    },
    {
      id: 5,
      Component: Firefly,
    },
    {
      id: 6,
      Component: Snc,
    },
  ];

  return (
    <div className="images-section">
      <div className="image-section-holder">
        <ul className="img-list-holder">
          {images.map(({ id, Component }) => (
            <li key={id} className="img-list">
              <Component className="img" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ImagesSection;
