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
    <div className="images-section">
      <div className="image-section-holder">
        <ul className="img-list-holder">
          {images.map((image) => (
            <li key={image.id} className="img-list">
              <img src={image.imageUrl} alt="" className="img" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ImagesSection;
