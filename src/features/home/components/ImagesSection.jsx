const ImagesSection = () => {
  const images = [
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
